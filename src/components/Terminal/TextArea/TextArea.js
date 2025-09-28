import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import "./TextArea.css";
import handleCommand, {handleTab} from "./CommandHandler";

const PROMPT = "user@carloscarras.tech~$";


function TextArea(props, ref) {
    const [commandHistoryPointer, setCommandHistoryPointer] = useState(0);
    const [commandHistory, setCommandHistory] = useState([""]);
    const [hasKeyBeenEntered, setHasKeyBeenEntered] = useState(false);
    const [entries, setEntries] = useState([{id: 0, value: "", disabled: false, isUserInput: true}]);
    const inputRefs = useRef({});

    const { focus } = props;

    useEffect(() => {
        /* focus on input, only if the user has already entered a command. prevents autofocus on load*/
        if (entries.length > 0 && (hasKeyBeenEntered || focus)) {
            const lastEntry = entries[entries.length - 1];
            if (lastEntry.isUserInput && inputRefs.current[lastEntry.id]) {
                inputRefs.current[lastEntry.id].focus();
            }
        }
    }, [entries, hasKeyBeenEntered, focus]);

    useImperativeHandle(ref, () => ({
        focusLastInput: () => {
            const lastEntry = entries[entries.length - 1];
            if (lastEntry && lastEntry.isUserInput && inputRefs.current[lastEntry.id]) {
                inputRefs.current[lastEntry.id].focus();
            }
        }
    }));

    const createNewInputEntry = (entryId, value) => {
        setEntries(prevEntries => {
            const newEntry = { id: entryId, value: value, disabled: false, isUserInput: true };
            return [...prevEntries, newEntry];
        });
    }
    
    const createNewResponseEntry = (entryId, res) => {
        setEntries(prevEntries => {
            const newResponse = { 
                id: entryId, 
                value: String(res ?? ""),
                disabled: true, 
                isUserInput: false 
            };
            return [...prevEntries, newResponse];
        });
    };


    const handleKeyDown = (event, entryId) => {
        setHasKeyBeenEntered(true);

        switch (event.key) {
            case "Enter":
                const userInput = entries[entryId].value;
                const res = handleCommand(userInput);
                let nextEntryId = entryId + 1;

                /* adding command to history */
                if (userInput.trim()) {
                    setCommandHistory([commandHistory[0], userInput, ...commandHistory.splice(1)]);
                }

                /* handling response */
                if (res) {
                    if (res === -1) {
                        setEntries([]);
                        nextEntryId = 0;
                        
                    } else if (typeof res === "string") {
                        createNewResponseEntry(nextEntryId, res);
                        nextEntryId += 1;
                        
                    } else if (res[Symbol.asyncIterator]) {
                        (async () => {
                            for await (const line of res) {
                                createNewResponseEntry(nextEntryId, line);
                                nextEntryId += 1;
                            }
                            createNewInputEntry(nextEntryId, "");
                        })();
                        entries[entryId].disabled = true;

                         /* don’t add another input yet */
                        return;
                    }
                }
                         
                /* create new line */
                entries[entryId].disabled = true;
                createNewInputEntry(nextEntryId, "");

                break;

            case "c":
                if (event.ctrlKey) {
                    entries[entryId].value += "^C";
                    entries[entryId].disabled = true;
                    createNewInputEntry(entryId + 1, "");
                }
                break;

            case "ArrowUp":
                event.preventDefault(); 
                if (commandHistoryPointer < commandHistory.length - 1) {
                    const prevCommand = commandHistory[commandHistoryPointer + 1];
                    setCommandHistoryPointer(commandHistoryPointer + 1);
                    entries[entryId].value = prevCommand;
                }
                break;

            case "ArrowDown":
                event.preventDefault(); 
                if (commandHistoryPointer > 0) {
                    const nextCommand = commandHistory[commandHistoryPointer - 1];
                    setCommandHistoryPointer(commandHistoryPointer - 1);
                    entries[entryId].value = nextCommand;
                }
                break;
            
            case "Tab":
                event.preventDefault();
                const userInput2 = entries[entryId].value;
                const autocomplete = handleTab(userInput2, event.target.selectionStart)
                if (typeof(autocomplete) === 'string') {
                    /* autocomplete */
                    entries[entryId].value = autocomplete;
                    setEntries([...entries]);
                } 
                else if (Array.isArray(autocomplete)) {
                    /* displaying options */
                    let nextEntryId = entryId + 1;
                    createNewResponseEntry(nextEntryId, autocomplete.join("\n"));
                    nextEntryId += 1;
                    createNewInputEntry(nextEntryId, userInput2);
                }
                break;

            default: 
                setCommandHistoryPointer(0);

                break;
        }
    };

    const handleChange = (event, entryId) => {
        const updatedEntries = entries.map((entry) =>
            entry.id === entryId ? { ...entry, value: event.target.value } : entry
        );
        setEntries(updatedEntries);
    };

    const handleNewLines = (text) => {
        const lines = text.split("\n");
    
        return (
            <>
                {lines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br/>
                    </React.Fragment>
                ))}
            </>
        );
    };
    

    return (
        <div className="textarea-container">
            {entries.map((entry) => (
                entry.isUserInput ? 
                    <div className="entry" key={entry.id}>
                        <span className="prompt">{PROMPT}</span>
                        <input
                            type="text"
                            placeholder="type help"
                            autoComplete="off"
                            autoCorrect="off" 
                            autoCapitalize="none"
                            ref={(input) => { inputRefs.current[entry.id] = input; }}
                            value={entry.value}
                            disabled={entry.disabled}
                            onKeyDown={(event) => handleKeyDown(event, entry.id)}
                            onChange={(event) => handleChange(event, entry.id)}
                        />
                    </div>
                :
                    <div className="entry response" key={entry.id}>
                        { handleNewLines(entry.value) }
                    </div>
            ))}
        </div>
    );
}

export default forwardRef(TextArea);
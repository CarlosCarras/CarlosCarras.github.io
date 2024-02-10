import React, { useState, useRef, useEffect } from "react";
import "./TextArea.css";
import handleCommand from "./CommandHandler";

const PROMPT = "user@carloscarras.tech~$";


function TextArea() {
    const [commandHistoryPointer, setCommandHistoryPointer] = useState(0);
    const [commandHistory, setCommandHistory] = useState([""])
    const [entries, setEntries] = useState([{id: 0, value: "", disabled: false, isUserInput: true}]);
    const inputRefs = useRef({});

    useEffect(() => {
        if (entries.length > 0) {
            const lastEntryId = entries[entries.length - 1].id;
            inputRefs.current[lastEntryId].focus();
        }
    }, [entries]);

    const createNewInputEntry = (entryId) => {
        setEntries(prevEntries => {
            const newEntry = { id: entryId, value: "", disabled: false, isUserInput: true };
            return [...prevEntries, newEntry];
        });
    }
    
    const createNewResponseEntry = (entryId, res) => {
        setEntries(prevEntries => {
            const newResponse = { id: entryId, value: res, disabled: true, isUserInput: false };
            return [...prevEntries, newResponse];
        });
    }

    const handleKeyDown = (event, entryId) => {
        switch (event.key) {
            case "Enter":
                const input = entries[entryId].value;
                const res = handleCommand(input);
                let nextEntryId = entryId + 1;
                if (res) {
                    if (res === -1) {
                        /* handle terminal 'clear' */
                        setEntries([])
                        nextEntryId = 0;
                    } else {
                        /* output response */
                        createNewResponseEntry(nextEntryId, res);
                        nextEntryId += 1;
                    }
                }
                
                /* adding command to history */
                if (input.trim()) {
                    setCommandHistory([commandHistory[0], input, ...commandHistory.splice(1)]);
                }
                
                /* create new line */
                entries[entryId].disabled = true;
                createNewInputEntry(nextEntryId);

                break;

            case "c":
                if (event.ctrlKey) {
                    entries[entryId].value += "^" + "C";
                    entries[entryId].disabled = true;
                    createNewInputEntry(entryId + 1);
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

export default TextArea;

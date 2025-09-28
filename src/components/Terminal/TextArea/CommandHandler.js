const COMMANDS = [
    {name: "cd", callback: _cd},
    {name: "ls", callback: _ls},
    {name: "alias", callback: _alias},
    {name: "unalias", callback: _unalias},
    {name: "echo", callback: _echo},
    {name: "pwd", callback: _pwd},
    {name: "clear", callback: _clear},
    {name: "whoami", callback: _whoami},
    {name: "ping", callback: _ping},
    {name: "su", callback: _su},
    {name: "exit", callback: _exit},
    {name: "help", callback: _help},
]

const DIRECTORY_STRUCTURE = {
    "resume": {},
    "projects": {"pump-controller": {}, "max": {}, "bioprinter": {}, "rtrescue": {}, "bracket": {}, "custom-pc": {}},
    "contact": {},
    "gallery": {},
    "extras": {"ndseg2024": {}, "cs8750": {}, "gtaudition": {}, "asb2023": {}}
}

let ALIASES = []

let IS_SUDO = false;


function parseTokens(entry) {
    let substitutedTokens = [];
    let tokens = [];

    // Replace items in double quotes with a placeholder and store them in tokens array
    // e.g., Welcome to this "beautiful world" "of ours!" >>>> Welcome to this {1} {2}
    const regex = /"([^"]*)"/g;
    entry = entry.replace(regex, (match, p1) => {
        const placeholder = `{${substitutedTokens.length}}`;
        substitutedTokens.push(p1);
        return placeholder;
    });

    // Split the modified entry by spaces
    const splitBySpace = entry.trim().split(/\s+/);

    // Iterate through the split tokens
    splitBySpace.forEach(token => {
        if (token.startsWith('{') && token.endsWith('}')) {
            // Restore items from double quotes by replacing placeholders with original value
            const index = parseInt(token.slice(1, -1));
            tokens.push(substitutedTokens[index]);
        } else {
            tokens.push(token);
        }
    });

    return tokens;
}

export default function handleCommand(entry) {
    let tokens = parseTokens(entry);
    let sudo = false;
    let returnValue = "";
    let wasCmdFound = false;

    /* handling sudo  */
    if (tokens[0] === "sudo") { sudo = true; }
    let cmd = sudo ? tokens[1] : tokens[0];

    /* parsing argumenets */
    let args = []
    if (sudo && tokens.length > 2) {
        args = tokens.slice(2); 
    } else if (!sudo && tokens.length > 1) { 
        args = tokens.slice(1); 
    }

    /* checking for args in alias table */
    if (cmd !== "alias" && cmd !== "unalias") {
        for (let i=0; i < args.length; i++) {
            args[i] = checkIfTokenIsAlias(args[i]);
        }
    }
    /* checking for cmd in alias table */
    cmd = checkIfTokenIsAlias(cmd);

    for (let i=0; i < COMMANDS.length; i++) {
        if (cmd !== COMMANDS[i].name) continue;

        returnValue = COMMANDS[i].callback(args, sudo);
        wasCmdFound = true;
        break;
    }

    if (cmd && !wasCmdFound) {
        returnValue = handleInvalidCommand(cmd);
    }

    return returnValue;
}

function handleInvalidCommand(cmdName) {
    return "command not found: " + cmdName
}

function generateTooManyArguementsRes(cmdName) {
    return cmdName + ": too many arguments"
}

function generateNotEnoughArguementsRes(cmdName) {
    return cmdName + ": not enough arguments"
}

export function handleTab(entry, cursorPosition) {
    const tokens = parseTokens(entry);
    let cmd = (tokens[0] === "sudo") ? tokens[1] : tokens[0];

    if ((cmd !== "cd") && (cmd !== "ls")) return;

    let candidateSubstring = "";
    let startOfToken = -1;
    let endOfToken = -1;

    /* identifying the current token */
    for (let i=0; i < entry.length; i++) {
        if (!/\s/.test(entry[i])) {
            if (i < cursorPosition) {
                candidateSubstring += entry[i];
                
                if (entry[i] === "/") {
                    startOfToken = i+1;
                }
            }
        } else {
            if (i < cursorPosition) {
                candidateSubstring = ""
                startOfToken = i+1;
            } else {
                endOfToken = i-1;
                break;
            }
        }
    }

    if (endOfToken < 0) {
        endOfToken = entry.length - 1;
    }

    /* parsing filepath */
    const path = candidateSubstring.split('/');
    let directory = DIRECTORY_STRUCTURE;

    if (path.length > 1) {
        for (let i=0; i < path.length; i++) {
            candidateSubstring = path[i];
            let temp = directory[path[i]];
            directory = temp ? temp : directory;
        }
    }

    /* identifying the possible replacements */
    let possibilities = Object.keys(directory);
    let suggestions = [];
    
    for (let i=0; i < possibilities.length; i++) {
        if (possibilities[i].startsWith(candidateSubstring)) {
            suggestions.push(possibilities[i]);
        }
    }   

    if (suggestions.length === 1) {
        const autocomplete = entry.substring(0, startOfToken) + suggestions[0] + "/" + entry.substring(endOfToken+1, entry.length);
        return autocomplete;
    } else if (suggestions.length > 1) {
        return suggestions;
    }
}

function checkIfTokenIsAlias(token) {
    let value = token;

    for (let i=0; i < ALIASES.length; i++) {
        if (token === ALIASES[i].alias) {
            value = ALIASES[i].value;
            break;
        }
    }

    return value;
}


/* commands */

function _help(args, sudo) {
    let available_cmds = []
    
    for (let i=0; i < COMMANDS.length; i++) {
        if (COMMANDS[i].name === "help") continue;

        available_cmds.push(COMMANDS[i].name);
    }

    return available_cmds.join("\n");
}

function _echo(args, sudo) {
    return  args.join(' ');
}

function _alias(args, sudo) {
    if (args.length > 2) {
        return generateTooManyArguementsRes("alias");
    } 
    else if (args.length === 1) {
        return generateNotEnoughArguementsRes("alias");
    }
    else if (args.length === 0) {
        return ALIASES.map(({ alias, value }) => `${alias}=${value}`).join('\n');
    }

    const candidateAlias = args[0];
    const candidateValue = args[1].replace("\"", "");
    let aliasExists = false;

    /* making sure that desired alias is not a command */
    for (let i=0; i < COMMANDS.length; i++) {
        if (candidateAlias === COMMANDS[i].name) {
            return "unable to set alias for existing command: " + candidateAlias;
        }
    }

    /* checking to see if the alias already exists in the table */
    for (let i=0; i < ALIASES.length; i++) {
        if (candidateAlias === ALIASES[i].alias) {
            ALIASES[i].value = candidateValue;
            aliasExists = true;
            break;
        }
    }

    if (!aliasExists) {
        ALIASES.push({alias: candidateAlias, value: candidateValue})
    }
}

function _unalias(args, sudo) {
    if (args.length < 1) {
        return generateNotEnoughArguementsRes("unalias");
    } 
    else if (args.length > 1) {
        return generateTooManyArguementsRes("alias");
    }
    
    const candidateAlias = args[0];

    ALIASES = ALIASES.filter(function(item) {
        return item.alias !== candidateAlias;
    });
}

function _pwd(args, sudo) {
    if (args.length > 0) {
        return generateTooManyArguementsRes("pwd");
    }
    return window.location.href;
}

function _clear(args, sudo) {
    if (args.length > 0) {
        return generateTooManyArguementsRes("clear");
    }
    return -1;
}

function _cd(args, sudo) {
    if (args.length > 1) {
        return generateTooManyArguementsRes("cd");
    }
    if (args.length > 0) {
        args = args[0].toLowerCase()
        args = (args.slice(0,2) === "./") ? args.slice(2) : args
        
        if (args === "home") {
            args = "";
        }
    }

    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port ? `:${window.location.port}` : '';

    const baseURL = `${protocol}//${hostname}${port}/`;
    const targetURL = baseURL + args;
    window.location.href = targetURL;
}

function _ls(args, sudo) {
    if (args.length > 1) {
        return generateTooManyArguementsRes("ls");
    }
    if (args.length === 0) {
        return Object.keys(DIRECTORY_STRUCTURE).join('\n');
    }

    let arg = args[0].toLowerCase()
    arg = (args[0].slice(0,2) === "./") ? arg.slice(2) : arg
    arg = (arg.slice(0,1) === "/") ? arg.slice(1) : arg
    arg = (arg.slice(arg.length-1) !== "/") ? arg + "/" : arg
    const path = arg.split('/');
    let directory = DIRECTORY_STRUCTURE;

    for (let i=0; i < path.length-1; i++) {
        let temp = directory[path[i]];
        if (!temp) {
            return "unknown directory: " + args[0]
        };
        directory = temp;
    }

    const entries = Object.keys(directory);

    return entries.join('\n');
}

function _whoami(args, sudo) {
    if (args.length > 0) {
        return generateTooManyArguementsRes("whoami");
    }

    return "Hi, I'm Carlos, and welcome to my personal website! \
            \n\
            Please reach out to me if you have any questions about what I do, or if you ever want to collaborate."
}

function _su(args, sudo) {
    if (sudo && !IS_SUDO) return "access denied. good idea though"
    if (!IS_SUDO) return "access denied. nice try"

    IS_SUDO = true;
}

function _exit(args, sudo) {
    if (args.length > 0) {
        return generateTooManyArguementsRes("exit");
    }
    document.getElementsByClassName("terminal-container")[0].classList.add("disabled")
}

async function* _ping(args, sudo) {
    const generateNotEnoughArguementsRes = (cmd) => `${cmd}: not enough arguments`;
    const generateTooManyArguementsRes = (cmd) => `${cmd}: too many arguments`;

    if (args.length < 1) {
        yield generateNotEnoughArguementsRes("ping");
        return;
    }
    if (args.length > 1) {
        yield generateTooManyArguementsRes("ping");
        return;
    }

    const target = args[0];
    yield `PING ${target} (${target}): 56 data bytes`;

    let transmitted = 0;
    let received = 0;

    const sleep = (ms) => new Promise(res => setTimeout(res, ms));

    const fetchWithTimeout = (url, timeout = 500) => {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        return fetch(url, { mode: "no-cors", signal: controller.signal })
            .finally(() => clearTimeout(id));
    };

    for (let i = 1; i <= 4; i++) {
        transmitted += 1;
        const start = performance.now();
        try {
            await fetchWithTimeout(`https://${target}/?cacheBust=${Math.random()}`, 500);
            const end = performance.now();
            const time = (end - start).toFixed(1);
            received += 1;
            yield `64 bytes from ${target}: icmp_seq=${i} ttl=64 time=${time} ms`;
        } catch (err) {
            yield `Request to ${target} failed (icmp_seq=${i})`;
        }
        await sleep(500);
    }

    yield `--- ${target} ping statistics ---`;
    const loss = Math.round(((transmitted - received) / transmitted) * 100);
    yield `${transmitted} packets transmitted, ${received} received, ${loss}% packet loss`;
}
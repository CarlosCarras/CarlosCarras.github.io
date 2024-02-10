const COMMANDS = [
    {name: "cd", callback: _cd},
    {name: "ls", callback: _ls},
    {name: "alias", callback: _alias},
    {name: "unalias", callback: _unalias},
    {name: "echo", callback: _echo},
    {name: "pwd", callback: _pwd},
    {name: "clear", callback: _clear},
    {name: "whoami", callback: _whoami},
    {name: "su", callback: _su},
    {name: "exit", callback: _exit},
    {name: "help", callback: _help},
]

const DIRECTORY = ["home", "about", "contact"]

let ALIASES = []

let IS_SUDO = false;

function parseTokens(entry) {
    const tokens = [];
    let currentToken = '';

    // Regular expression to match items in double quotes
    const regex = /"([^"]+)"/g;

    // Replace items in double quotes with a placeholder
    entry = entry.replace(regex, (match, p1) => `{${tokens.length}}`);

    // Split the modified entry by spaces
    const splitBySpace = entry.trim().split(' ');

    splitBySpace.forEach(token => {
        if (token.startsWith('{') && token.endsWith('}')) {
            // Restore items from double quotes by replacing placeholders with original value
            const index = parseInt(token.slice(1, -1));
            tokens.push(tokens[index]);
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
    else if (args.length == 1) {
        return generateNotEnoughArguementsRes("alias");
    }
    else if (args.length == 0) {
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
        args = args[0].toLowerCase().replace("./", "")
    }

    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port ? `:${window.location.port}` : '';

    const baseURL = `${protocol}//${hostname}${port}/`;
    const targetURL = baseURL + args;
    window.location.href = targetURL;
}

function _ls(args, sudo) {
    if (args.length > 0) {
        return generateTooManyArguementsRes("ls");
    }

    return DIRECTORY.join("\n");
}

function _whoami(args, sudo) {
    if (args.length > 0) {
        return generateTooManyArguementsRes("whoami");
    }

    return "I may not known who you are, but thank you for visiting my site!"
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
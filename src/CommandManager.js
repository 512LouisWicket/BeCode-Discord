"use strict";

// Import node.js dependencies
const { readdirSync } = require("fs");

/**
 * @class Command
 * @classdesc Represent a discord bot command
 */

class Command {
    constructor({ name, alias = [], desc, action } = {}) {
        this.name = name;
        this.alias = alias;
        this.decs = desc;
        this.action = action;
    }
}

/**
 * @class CommandManager
 * @classdesc Create and handle commands
 */

class CommandManager {
    constructor(prefix) {

        this.prefix = prefix;

        // Map every command name with its data
        this.commandList = new Map();

        // Dynamically generate commands from files located in the 'commands' directory and add it to the commandList
        for (const file of readdirSync(__dirname + "/commands")) {
            const command = new Command(require("./commands/" + file));
            for (const name of [command.name, ...command.alias]) {
                this.commandList.set(name, command);
            }
        }
    }

    parse(content) {
        const [command, ...args] = content.substring(this.prefix.length).split(/\s+/);
        return [command, args];
    }

    exists(command) {
        return this.commandList.has(command);
    }

    exec(command, ...args) {
        if (this.exists(command)) {
            this.commandList.get(command).action(args);
        }
    }
}

module.exports = CommandManager;
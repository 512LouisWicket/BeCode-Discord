"use strict";

// Import node.js dependencies
const { readdirSync } = require("fs");

/**
 * @class Command
 * @description Represent a discord bot command
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
 * @description Create and handle commands
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

    /**
     * @description Split the content of a message into a command name and arguments
     * @param { String } content The content of the discord message
     * @returns { Array<String> } An array containing the command name and its arguments
     */

    parse(content) {
        const [command, ...args] = content.substring(this.prefix.length).split(/\s+/);
        return [command, args.join` `];
    }

    /**
     * @description Check that a command is defined in the commandList
     * @param { String } command The command name to check
     * @returns { Boolean } True if the command is set in the commandList, otherwise false
     */

    exists(command) {
        return this.commandList.has(command);
    }

    /**
     * @description Execute the command with the passed arguments
     * @param { String } command The command to execute
     * @param { Object } args The arguments to pass to the command
     */

    exec(command, args) {
        if (this.exists(command)) {
            this.commandList.get(command).action(args);
        }
    }
}

module.exports = CommandManager;
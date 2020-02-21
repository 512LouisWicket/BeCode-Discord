"use strict";

// Set up bot configuration
const config = require("./config/config.json");
const prefix = config.prefix || "!";

// Create a new bot client, connect it and display a message in the console when it is ready
const bot = new (require("discord.js").Client)();
bot.login(config.token);
bot.once("ready", () => console.log("\x1b[32m%s\x1b[0m", `Bffvuut, bffvuut ! ${bot.user.username} est dans la place.`));

// A custom module to handle commands
const CommandManager = require("./src/CommandManager.js");
const CM = new CommandManager(prefix);

// Listen to incoming messages and try to parse command
bot.on("message", msg => {
    if (msg.author.bot) return; /* Ensure the bot doesn’t respond to itself */

    const { content } = msg;
    if (content.startsWith(prefix)) {
        const [command, args] = CM.parse(content);
        CM.exec(command, {args, msg, bot});
    }
});
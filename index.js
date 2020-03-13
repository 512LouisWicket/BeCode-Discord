"use strict";

// Set up bot configuration
const config = require("./config/config.json");
const prefix = config.prefix || "!";

// Create a new bot client, connect it and display a message in the console when it is ready
const { Client } = require("discord.js");
const bot = new Client();
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

// Greet the newcomers
bot.on("guildMemberAdd", ({ user, guild }) => 
    guild.channels.get(guild.systemChannelID).send(
        `Bienvenue <@!${user.id}> sur le Discord de BeCode Charleroi ! \u{1F973}\nPense à indiquer ton prénom dans ton pseudo (clic droit sur l’image du serveur \u{2192} Changer le pseudo) afin qu’on puisse te reconnaître facilement \u{1F609}\n\nPasse un agréable moment parmi nous \u{1F37B}`
    )
);
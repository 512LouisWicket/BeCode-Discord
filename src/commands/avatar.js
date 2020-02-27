"use strict";

const cmd = {
    name: "avatar",
    alias: ["pic", "debug"],
    desc: "Commande de test",
    action({ msg, args } = {}) {
        console.log("action!")
        console.log(msg.channel.guild.members)
        
        // console.log(msg.author)
        msg.channel.send("pseudo selectionner: "+args);
        msg.channel.send(msg.author.avatarURL);
    }
};

module.exports = cmd;
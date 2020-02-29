"use strict";

const cmd = {
    name: "avatar",
    alias: ["pic"],
    desc: "Commande de test",
    action({ msg, args } = {}) {
        msg.channel.send("pseudo selectionner: "+args);
        msg.channel.send(msg.author.avatarURL);
    }
};

module.exports = cmd;

//? By Vincent Vissers & Louis Wicket
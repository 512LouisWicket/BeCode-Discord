"use strict";

const cmd = {
    name: "test",
    alias: ["example", "debug"],
    desc: "Commande de test",
    action([_, msg]) {
        msg.channel.send("Ceci est un simple test \u{1F601}");
    }
};

module.exports = cmd;
"use strict";

const cmd = {
    name: "codepoint",
    alias: ["unicode"],
    desc: "Retourne le point de code du caractère passé en paramètre.",
    action({ msg, args } = {}) {
        msg.channel.send(`Point de code en base 16 pour \`${args[0]}\` : **${args[0].codePointAt().toString(16).toUpperCase()}**`);
    }
};

module.exports = cmd;

//? By Louis Wicket
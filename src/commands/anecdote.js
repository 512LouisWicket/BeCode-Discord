"use strict";

const anecdotes = new Map(require("../../data/anecdotes.json"));

const rand = max => Math.random() * max | 0;

const cmd = {
    name: "anecdote",
    alias: ["tips", "tip", "anecdotes"],
    desc: "Donne une anecdote sur un langage de programmation !",
    action({ msg, args } = {}) {
        args = args.split(/\s+/);
        if (args.length) {
            const language = anecdotes.get(args[0]);
            if (language === void null) {
                msg.channel.send(`Arf, aucune anecdote n’a été écrite pour le langage ${args[0]} \u{1F615}\n`);
            } else {
                msg.channel.send(language[rand(language.length)]);

            }
        } else {
            msg.channel.send("Veuillez indiquer un langage de programmation !");
        }
    }
};

module.exports = cmd;
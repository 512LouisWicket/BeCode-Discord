"use strict";

const mois =new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");

const jour = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");

let date= new Date();

// on construit le message
var message = jour[date.getDay()] + " ";   // nom du jour
message += date.getDate() + " ";   // numero du jour
message += mois[date.getMonth()] + " ";   // mois
message += date.getFullYear();

const cmd = {
    name: "day",
    alias: ["date", "debug"],
    desc: "Commande qui donne l'heure et la date",
    action({ msg } = {}) {
        msg.channel.send(message);
    }
};

module.exports = cmd;

//? By Vincent Vissers
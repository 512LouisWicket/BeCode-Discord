"use strict";

class sondage{
    constructor(temps,arg,arg2){
        this.temps= temps,
        this.arg= arg,
        this.arg2=arg2
    }
}

const cmd = {
        name: "sondage",
        alias: ["sondage", "debug"],
        desc: "Commande de test",
        action({ msg, args } = {}) {
            let arg = args.split(",");
            let call = new sondage(arg[0],arg[1],arg[2]);
            msg.channel.send(":squid: "+"Un sondage est lancer"+" :squid:"+"\n"+"Durée du sondage: "+call.temps+" Heure"+"\n"+"Proposition 1: "+call.arg+"\n"+"proposition 2: "+call.arg2);
        }
    };

module.exports = cmd;

//? By Vincent Vissers
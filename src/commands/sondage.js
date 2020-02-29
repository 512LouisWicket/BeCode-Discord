"use strict";

class Sondage{
    constructor(temps,arg,arg2){
        this.temps= temps,
        this.arg= arg,
        this.arg2=arg2
    }
}

const cmd = {
        name: "sondage",
        alias: [],
        desc: "Commande de test",
        action({ msg, args } = {}) {
            var arg = args.split(",");
            console.log(arg)

            const timer = arg[0]*1000;

            console.log(timer)

            function end(){msg.channel.send(":squid: Le sondage est terminer les amis ! :squid:",)};
            
            if ( arg.length < 3 ) {
                msg.channel.send(':warning: il manque des arguments :warning:\nEssaye ``!sondage **temps**, **argument** , **argument**``');
            }
            else if (arg[0]===''||arg[1]===''||arg[2]===''){
                msg.channel.send(':warning: il manque des arguments :warning:\nEssaye ``!sondage **temps**, **argument** , **argument**``');
            }
            else{
                let call = new Sondage(arg[0],arg[1],arg[2]);
                msg.channel.send(":squid: "+"*Un sondage est lancer*"+" :squid:"+"\n"+"*Durée du sondage:* ``"+call.temps+" seconde``"+"\n"+"*Proposition 1:* ``"+call.arg+"``\n"+"*proposition 2:* ``"+call.arg2+'``');
                setTimeout(end,timer)
                console.log(call)
            }
            
        }
    }

module.exports = cmd;

//? By Vincent Vissers
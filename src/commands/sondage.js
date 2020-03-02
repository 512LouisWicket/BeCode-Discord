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
        action({ msg, args,bot } = {}) {
            var arg = args.split(",");
            let choix1 = 0;
            let choix2 = 0;
            console.log(arg)

            const timer = arg[0]*1000;
            function end(){
                msg.channel.send({embed:{
                    color: 3847903,
                    description:":squid: Le sondage est terminer les amis ! :squid:"+"\n\n**Voici les résultats**\n\n"+"Proposition 1: ``"+choix1+" Votes``\n\n"+"Proposition 2: ``"+choix2+" Votes``\n\n"+":squid: Merci de votre participations :squid:"}})
                choix1 = 0;
                choix2 = 0;
            };

            console.log(timer)

            
            
            if ( arg.length < 3 ) {
                msg.channel.send(':warning: il manque des arguments :warning:\nEssaye ``!sondage **temps**, **argument** , **argument**``');
            }
            else if (arg[0]===''||arg[1]===''||arg[2]===''){
                msg.channel.send(':warning: il manque des arguments :warning:\nEssaye ``!sondage **temps**, **argument** , **argument**``');
            }
            else{
                let call = new Sondage(arg[0],arg[1],arg[2]);
                
                setTimeout(end,timer)
                msg.channel.send({embed:{
                    color: 3847903,
                    description : ":squid: "+"*Un sondage est lancer*"+" :squid:"+"\n"+"*Durée du sondage:* ``"+call.temps+" seconde``"+"\n"+"*Proposition 1:* ``"+call.arg+' '+'👍'+"``\n"+"*proposition 2:* ``"+call.arg2+' '+'👎'+"``"
                }})
                .then(msg =>{
                    msg.react('👍');
                    msg.react('👎');
                    bot.on('messageReactionAdd', (reaction, user) =>{
                        

                        if (reaction.emoji == "👍" && user.id !== bot.user.id) {
                            choix1 =+1
                        }
                        else if (reaction.emoji == "👎" && user.id !== bot.user.id) {
                            choix2 =+1
                        }
                    })
                    
                    
                })
                .catch(console.error)
            }
            
        }
    }

module.exports = cmd;

//? By Vincent Vissers
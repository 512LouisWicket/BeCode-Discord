"use strict";

/**
 * @author Vincent Vissers, Louis Wicket
 */

 // TODO: Trouver un moyen de prendre en charger les pseudos renommés

function sendAvatar(msg, id, avatar) {
    if (id === void null) msg.channel.send("Aucun utilisateur n’a été trouvé !");
    else if (avatar === null) msg.channel.send("Aucun avatar trouvé pour cet utilisateur !");
    else msg.channel.send(`https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=2048`);
}

const cmd = {
    name: "avatar",
    alias: ["pic"],
    desc: "Commande de test",
    action({ msg, args } = {}) {

        if (args.length === 0) {
            return msg.channel.send(msg.author.avatarURL);
        }

        const members = msg.channel.guild.members;

        if (members.get(args)) {
            return sendAvatar(msg, args, members.get(args).user.avatar);
        } else if (/\<@!\d{18}>$/.test(args)) {
            const id = args.match(/\d+/)[0];
            return sendAvatar(msg, id, members.get(id).user.avatar);
        } else {
            args = args.toLowerCase();
            for (const { user } of members.values()) {
                if (user.username.toLowerCase().includes(args)) {
                    const id = user.id;
                    return sendAvatar(msg, user.id, members.get(id).user.avatar)
                }
            }
            msg.channel.send("Aucun utilisateur n’a été trouvé ! (:warning: Les pseudos renommés ne sont pas encore pris en charge :frowning:)");
        }
    }
};

module.exports = cmd;
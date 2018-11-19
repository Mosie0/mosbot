const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let channels = message.mentions.channels.first() || message.guild.channels.get(args[0])
    if(!channels) channels = message.channel.send(args.join(' '))
    message.delete().catch();
    channels.send(args.slice(1).join(" "));
}


module.exports.help = {
    perm: "admins",
    name: "say",
    names: "Say"
}

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let nopermembed = new Discord.RichEmbed()
        .setColor("FF0000")
        .setDescription(`${message.author}, you do not have the MANAGE_MESSAGES permission.`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed)
    let channels = message.mentions.channels.first() || message.guild.channels.get(args[0])
    if(!channels) channels = message.channel.send(args.join(' '))
    let botmessage = args.slice(1).join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}


module.exports.help = {
    name: "say",
    names: "Say"
}
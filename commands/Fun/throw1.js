const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const throwuser = message.mentions.users.first() || message.author;
    let botmessage = args.slice(1).join(" ");
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Threw **${botmessage}** at **${throwuser.username}**`)
    message.channel.send(embed);
}
module.exports.help = {
    name: "throw1"
}
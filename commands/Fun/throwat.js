const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let kUser = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!kUser) return message.channel.send("Who do you want me to throw this at??");
    const throwuser = message.mentions.users.first() || message.author;
    let botmessage = args.slice(1).join(" ");
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Threw **${botmessage}** at **${throwuser.username}**`)
    message.channel.send(embed);
}
module.exports.help = {
    name: "throwat"
}
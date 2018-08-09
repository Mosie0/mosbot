const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This is the Help Information")
        .addField(`Fun Comammnds`, `Currently Working on it.`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "funcmds"
}
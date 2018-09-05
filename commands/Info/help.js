const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("This is the Command List")
        .addField(`Commands List`, `Bot Owner Commands: m!botownercmds \n Fun Commands: m!funcmds \n Moderation Commands: m!moderationcmds \n Information Commands: m!infocmds`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "help"
}
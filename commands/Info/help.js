const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This is the Command List")
        .addField(`Commands List`, `Bot Owner Commands: m!botownercmds n/ Fun Commands: m!funcmds n/ Moderation Commands: m!moderationcommands`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "commandshelp"
}
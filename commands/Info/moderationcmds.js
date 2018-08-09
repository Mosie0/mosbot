const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This is the Help Information")
        .setTitle(`Moderation Commands`)
        .setDescription(`m!addrole: Add a role with this command
        m!ban: Ban a member with this command
        m!dm: Dm a member with this command
        m!kick: Kick with this command
        m!mute: Mute with this command
        m!purge: Purge messages with this command
        m!removerole: Remove roles with this command
        m!report: Report members with this command
        m!say: Make the bot say something with this command
        m!unban: Unban a member with this comamnd
        m!warn: Warn a member with this command`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "moderationcmds"
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("This is the Help Information")
        .setTitle(`Moderation Commands`)
        .setDescription(`m!addrole: Add a role
        m!ban: Ban a member
        m!dm: Dm a member
        m!kick: Kick a member
        m!mute: Mute a member
        m!purge: Purge messages
        m!removerole: Remove a role
        m!report: Report members
        m!say: Make the bot say something
        m!unban: Unban a member
        m!warn: Warn a member
        m!id: Find a members user ID
        m!poll: Start a poll
        m!softban:
        m!support: File a support ticket
        m!lock: Lock this channel, so no one can chat in it
        m!unlock: Allow the role @ everyone to chat in that channel
        m!discordupdates: Allows the bot to send a message to the channel #change-log
        m!annoucement: Send an embedded message to the #annoucements channel
        m!whois: Gives brief data on a member`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "moderationcmds"
}
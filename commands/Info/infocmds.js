const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField(`Information Comammnds`, `Current list of Information Commands (m!infocmds).`)
        .setDescription(`m!avatar: Shows the avatar of a member
        m!botinfo: Gives information about MosBot
        m!createinvite: Creates an invite
        m!emojify: Emojify a word
        m!emojis: Gives the current animated/still emojis in the current guild
        m!topinvites: Gives the current leaderboard of topinvites
        m!ping: Current ping of MosBot
        m!roles: Current roles in the server
        m!serverinfo: Gives information about the current guild
        m!serverlookup: Look up any server, and get information about that guild
        m!servers: Gives a hastebin link of the current servers MosBot is in
        m!stats: Gives stats about MosBot
        m!uptime: Gives the current uptime of MosBot
        m!`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
};


module.exports.help = {
    name: "botownercmds"
}
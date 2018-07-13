const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let serverSize = message.guild.memberCount;
let botCount = message.guild.members.filter(m => m.user.bot).size;
let humanCount = serverSize - botCount;
let sIcon = message.guild.iconURL;
let serverEmbed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("#000FF")
    .setAuthor("Command Ran By: " + message.author.username, message.author.avatarURL)
    .addField("Server Owner", `<@${message.guild.owner.user.id}>`, true)
    .setThumbnail(sIcon)
    .addField("Server Region", message.guild.region, true)
    .setTimestamp(message.guild.createdAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Total Channels", message.guild.channels.size, true)
    .addField("Total Roles", message.guild.roles.size, true)
    .addField("Total Bots", botCount, true)
    .addField("Total Humans", humanCount, true)
    .addField("Server Roles", "Type **s!roles** to see the server roles")
    .addField("You Joined", message.member.joinedAt)
    .setFooter(`ID: ${message.guild.id} ` + "Server Created At ", sIcon);
    message.channel.startTyping();
    message.channel.send(serverEmbed);
    await message.channel.stopTyping();
}

module.exports.help = {
    name: "serverinfo"
}
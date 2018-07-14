const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.stopTyping();
    message.delete().catch();
}

module.exports.help = {
    name: "Stop"
}

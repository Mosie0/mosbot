const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner only command. For more assistance Please contact the Bot Owner!.");
    message.channel.stopTyping();
    message.delete().catch();
}

module.exports.help = {
    name: "Stop"
}
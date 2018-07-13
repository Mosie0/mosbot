const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#800080")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445662475665408010/tenor_6.gif");



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Mosie"
}
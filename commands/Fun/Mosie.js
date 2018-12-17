const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage("https://media1.tenor.com/images/68b4a3e2a4bded23f88bba28223c81a1/tenor.gif");



    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "Mosie",
    perm: "all"
}

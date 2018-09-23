// SOON ;)
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let balEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#000FF")
    .setDescription('SOON')


    message.channel.send(balEmbed);

}

module.exports.help = {
    name: "balance",
    names: "bal",
    perm: "all"
}

// SOON ;)
const Discord = require("discord.js");
const idk = require("../../models/money.js");
module.exports.run = async (bot, message, args) => {
   idk.findOne({guildID: message.guild.id, userID: message.author.id}, async (err, db) => {
    if(!db){return message.channel.send(`${message.author}, I couldn't find anything for you in our database!`)}else{
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTimestamp()
    .addField("Money", `$${db.money}`, true)
    .addField("XP", `${db.xp}`, true)
    .addField("Level", `${db.level}`, true)
    .addField("Next Level", `${db.nextLevel}`, true)
    .setFooter("Note: This isn't fully added yet >.>", bot.user.displayAvatarURL)
    return message.channel.send(e)
    }
})
}

module.exports.help = {
    name: "balance",
    names: "bal",
    perm: "all"
}

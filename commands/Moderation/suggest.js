const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let suggestmessage = args.join(" ");
    let suggestchannel = message.guild.channels.find('name', 'suggestions')
    let embed = new Discord.RichEmbed()
        .addField("**SUGGESTION**", `${suggestmessage}`)
        .setFooter(`Suggestion By ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({embed}).then(msg => {
        msg.react("✅").then(() => msg.react("❎"))
    });
    
    message.reply(`Your Suggestion has been sent to the #suggestions channel.`)
    return;
}
module.exports.help = {
    perm: "all",
    name: "suggest"
}

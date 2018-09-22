const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let string = '';
    bot.guilds.forEach(guild => { string += guild.name + '\n'; })
    let embed = new Discord.RichEmbed()
    .setColor(`#0000FF`)
    .setTitle(`What servers am I in?`)
    .setDescription(string)
    message.channel.send(embed)
}
module.exports.help = {
    perm: "all",
    name: "servers"
}

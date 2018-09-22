const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let serverSize = message.guild.memberCount;
    let botCount = message.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
const embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
.setTimestamp()
.addField(`Members`, `**${serverSize}**`, true)
.addField(`Humans`, `**${humanCount}**`, true)
.addField(`Bots`, `**${botCount}**`, true)
message.channel.send(embed)
}
module.exports.help = {
    perm: "all",
    name: "membercount",
    names: "mc"
}

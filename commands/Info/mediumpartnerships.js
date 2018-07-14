const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`
Medium Partnerships: 
<@244271175608303616>: https://discord.gg/ZMYu7KK

Lit Fam Gaming: https://discord.gg/ynDsWHa

<@289538490201538560>'s Discord: https://discord.gg/rqGzftT

<@421033482752360448>'s Discord: https://discord.gg/tApCxyn
`)
.addField(`Partnerships`, `Dm Mo_sie to partner with Gaming HQ!`)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed);
}
module.exports.help = {
    name: "mediumpartnership"
}

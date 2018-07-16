const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`
Medium Partnerships: 
<@244271175608303616>: https://discord.gg/ZMYu7KK

Lit Fam Gaming: https://discord.gg/ynDsWHa

<@421033482752360448>'s Discord: https://discord.gg/tApCxyn
`)
.addField(`Partnerships`, `Dm <@283311727477784576> to partner with Gaming HQ!`)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed);
}
module.exports.help = {
    name: "mediumpartnership"
}

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`
Small Partnerships: 
<@244271175608303616>: https://discord.gg/SeWwhDd

<@298201869585612810> and <@297871529621061643>'s Discord: https://discord.gg/23wfHyG`)
.addField(`Partnerships`, `Dm Mo_sie to partnership with Gaming HQ!`)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed);
}
module.exports.help = {
    name: "smallpartnership"
}
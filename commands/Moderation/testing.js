const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Text here xd`)
message.channel.send(embed).then(sentmessage => {
  embed.setDescription("new Decription");
  embed.setDesctiption('MOSBOT o_o')
  sentmessage.edit(embed)
})


}
module.exports.help = {
  perm: "all",
  name: "testing"
}

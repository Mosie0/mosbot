const Discord = require('discord.js');

const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Text here xd`)
module.exports.run = async (bot, message, args) => {
message.channel.send(embed).then(sentmessage => {
  embed.setDescription("new Decription");
  message.channel.send(embed).then(sentmessage => {
    embed.setDescription("new Decriptionnew Decriptionnew Decription");

  sentmessage.edit(embed)
});


}
module.exports.help = {
  name: "testing"
}
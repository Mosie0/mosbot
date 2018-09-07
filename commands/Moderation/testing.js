const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
message.channel.send(embed).then(sentmessage => {
  embed.setDescription("new Decription");

  sentmessage.edit(embed)
});


}
module.exports.help = {
  name: "testing"
}

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`💥 Welcome To Strike & Savage's Hangout! Be sure to enjoy being in the server! \n 💥 Friendly staff \n 💥 Nice Members \n 💥 A Friendly Community \n 💥 Giveaways \n 💥 Music Channels \n 💥 And Much More!!!`)
.addField(`Server Invite`, `https://discord.gg/ZMYu7KK`)
.setThumbnail(`https://cdn.discordapp.com/avatars/288450828837322764/a_9da0205f2e4a0f15565046ad156ac839.gif`)
message.channel.send(embed);
}
module.exports.help = {
    name: "PartnerSS"
}

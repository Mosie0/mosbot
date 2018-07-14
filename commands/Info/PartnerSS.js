const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`💥 Welcome To Strike & Savage's Hangout! Be sure to enjoy being in the server! \n 💥 Friendly staff \n 💥 Nice Members \n 💥 A Friendly Community \n 💥 Giveaways \n 💥 Music Channels \n 💥 And Much More!!!`)
.addField(`Server Invite`, `https://discord.gg/23wfHyG`)
.setThumbnail(`https://images-ext-2.discordapp.net/external/D7pWKWW8lg23cZf65sYEMXjT8FtyHLB7fE3QCEITghY/https/discordapp.com/api/guilds/442780996895506442/icons/95b8f6e3929e58d3ddae70ca347ca3d4.jpg`)
message.channel.send(embed);
}
module.exports.help = {
    name: "PartnerSS"
}

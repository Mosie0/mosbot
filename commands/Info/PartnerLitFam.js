const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`
 Name: The Lit Fam Gaming
Owners: Savage and iDicer
Description: We are a collection of wonderful people, great game players & popular personalities - all who have come together to create The Lit Fam.

Features:

🔹  Family
🔹 Self-assignable Roles
🔹 Activity Roles
🔹 Music Bot
🔹 VC Game Nights
🔹 Lit Contests
🔹 Open for Partnerships
🔹 We are a Large Online Family
`)
.addField(`Server Invite`, `http://discord.gg/ynDsWHa`)
.setThumbnail(`https://images-ext-1.discordapp.net/external/iFR7HW3zlD6oP9UOPVM9Htx9S4nhPKGwRyA4Sud1daU/https/discordapp.com/api/guilds/297872830488641536/icons/872f93ac1aaa326c4f7352133bebf21b.jpg`)
message.channel.send(embed);
}
module.exports.help = {
    name: "PartnerLitFam"
}

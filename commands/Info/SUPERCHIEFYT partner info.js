const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`
●▬▬▬▬▬▬▬▬▬▬๑۩ SUPERCHIEFYT's Discord ۩๑▬▬▬▬▬▬▬▬▬▬▬●

<a:UpVote:465232115995246604> SUPERCHIEFYT's Discord

Features:
⬆  Level up roles 
🛡  Good Staff members
🤖  Fun bots
<a:Cheer:446237254499958795>  Good chill hangout for people 

`)
.addField(`Server Invite`, `https://discord.gg/ZMYu7KK`)
.setthumbnail(`https://cdn.discordapp.com/avatars/288450828837322764/a_9da0205f2e4a0f15565046ad156ac839.gif`)
message.channel.send(embed);
}
module.exports.help = {
    name: "PartnerChief"
}

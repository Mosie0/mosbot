const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`**Owner**
<@283311727477784576>

<@&446172124353265665>
***N/A***

<@&447962800791355402>
<@288450828837322764>

<@&467779026069618694>
<@244271175608303616>

<@&431811267968106506>
<@289148183282712590> 
<@297871529621061643>
<@434866964557463595>
<@298201869585612810>
<@330752829859954698>
<@421033482752360448>
<@281153525977972736>

<@&422058000250044416>
<@265344329147613185>
<@386620953414729728>
<@308290036334460929>
<@372468580643635211>
<@203259894743302145>

<@&466006038244622338> 
<@368775528234352642>
`)

// Owner: Mo_sie
// Co-Owner: N/A
// Bot-Commander: SUPERCHIEFYT
// Head Admin: Jonbn123
// Admins: Dawn, Savage, BroBro, Strike, Hunter, Cryptic
// Moderators: Cesargeronimo, Lord_H3xus, Boozoo6, Pancake, Victor, Silent
// Helper of the month: Sirred90
.setThumbnail(message.guild.iconURL)
message.channel.send(embed);
message.delete().catch();
}
module.exports.help = {
    name: "StaffList"
}

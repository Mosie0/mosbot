const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`**Owner**
<@283311727477784576>

<@&446172124353265665>
<@244271175608303616>
<@434866964557463595>

<@&447962800791355402>
<@288450828837322764>

<@&467779026069618694>
***Soon*** *RHG for Head Admin 2k19* ;)

<@&431811267968106506>
<@289148183282712590> 
<@297871529621061643>
<@298201869585612810>
<@330752829859954698>
<@421033482752360448>
<@281153525977972736>
<@288846410936221696>

<@&422058000250044416>
<@265344329147613185>
<@372468580643635211>
<@203259894743302145>

<@&466006038244622338> 
<@368775528234352642>
<@358334640928325662>
<@215496797710188544>
`)

// Owner: Mo_sie
// Co-Owner: Jonbn123, Brobro
// Bot-Commander: SUPERCHIEFYT
// Head Admin: 
// Admins: Dawn, Savage, Strike, Hunter, Cryptic, Weeby
// Moderators: Cesargeronimo, Boozoo6, Pancake, Victor, Silent
// Helper of the month: Sirred90, Robo, Starlight
.setThumbnail(message.guild.iconURL)
message.channel.send(embed);
message.delete().catch();
}
module.exports.help = {
    name: "StaffList"
}

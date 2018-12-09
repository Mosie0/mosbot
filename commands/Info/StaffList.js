const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setTitle(`Staff List`)
.setDescription(`**Owner**
<@283311727477784576>

<@&446172124353265665>
<@244271175608303616>

<@&447962800791355402>
<@288450828837322764>

<@&467779026069618694>
<@421033482752360448>

<@&431811267968106506>
<@289148183282712590> 
<@297871529621061643>
<@203259894743302145>

<@&422058000250044416>
<@265344329147613185>
<@372468580643635211>
<@368775528234352642>
<@358334640928325662>
`)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed);
message.delete().catch();
}
module.exports.help = {
    perm: "creator",
    name: "StaffList"
}

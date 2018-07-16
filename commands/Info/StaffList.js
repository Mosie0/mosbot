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
<@244271175608303616>

<@&431811267968106506>
<@289148183282712590> 
<@297871529621061643>
<@434866964557463595>
<@298201869585612810>
<@330752829859954698>
<@421033482752360448>

<@&422058000250044416>
<@265344329147613185>
<@386620953414729728>
<@281153525977972736>
<@308290036334460929>
<@362143129136267265>
<@372468580643635211>
<@203259894743302145>

<@&466006038244622338>
***N/A***
`)
.setThumbnail(`https://cdn.discordapp.com/attachments/421895390065852431/468466969637552159/GamingHQLogo.png`)
.setImage(`https://cdn.discordapp.com/attachments/422106448487776276/459126100061061139/my_tweet_7.png`)
message.channel.send(embed);
}
module.exports.help = {
    name: "StaffList"
}

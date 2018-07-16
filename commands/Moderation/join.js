bot.on('guildMemberAdd', member => {
const embed = new Discord.RichEmbed()
.setTitle("User Joined")
.addField("User",member.tag,true)
.addField("ID",member.id,true)
.setThumbnail(member.iconUrl)
.setTimestamp()
.setFooter(member.guild.name)
  bot.channels.get('422057529271648256').send(embed)
});

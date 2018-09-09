const Discord = require('discord.js');

module.exports.run = async member => {
    let serverSize = member.guild.memberCount;
    let botCount = member.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
    let servercount = serverSize;
    let membercount = new Discord.RichEmbed()
.setColor("RANDOM")
.addField(`Total Humans in the Discord`, `${humanCount}`)
.addField(`Total Members`, `${servercount}`)
    message.channel.send(membercount);
};

module.exports.help = {
    name: "membercount",
    names: "mc"
}
 
const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   let membercount = new Discord.RichEmbed()
.setColor("RANDOM")
.addField(`Total Humans in the Discord`, `${humanCount}`)
}

message.channel.send(membercount)
module.exports.help = {
    name: "membercount",
    names: "mc"
}

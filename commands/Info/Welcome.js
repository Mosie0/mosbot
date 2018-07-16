const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setImage(`https://cdn.discordapp.com/attachments/422052478075535360/459426338823077898/my_tweet_8.png`)
.addField(`Welcome to ***Gaming HQ!***`, `We are a bunch of people that just love to have fun, we have many fun things that you can enjoy in this discord! With all of us, it creates FUN!`)
message.channel.send(embed);
}
module.exports.help = {
    name: "Welcome"
}

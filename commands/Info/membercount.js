const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let serverSize = await message.guild.memberCount;
        let botCount = await message.guild.members.filter(m => m.user.bot).size;
        let humanCount = await serverSize - botCount;
        const embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : "https://cdn.discordapp.com/emojis/483118381650804747.gif")
            .setColor(`RANDOM`)
            .setTimestamp()
            .addField(`Members`, `**${serverSize}**`, true)
            .addField(`Humans`, `**${humanCount}**`, true)
            .addField(`Bots`, `**${botCount}**`, true)
        message.channel.send(embed)
}
module.exports.help = {
    perm: "all",
    name: "membercount",
    names: "mc"
}

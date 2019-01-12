const Discord = require("discord.js");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
        let loadingembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Loading..`)
            .setTimestamp()
        const m = await message.channel.send(loadingembed);
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`<:Mosbot:533775017435987979> Status <:Mosbot:533775017435987979>`)
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .addField(`Message Latency`, `${m.createdTimestamp - message.createdTimestamp}ms`, true)
            .addField(`API Latency`, `${Math.round(bot.ping)}ms`, true)
            .addField(`Uptime`, `${moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]")}`, true)
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL)
        m.edit(embed);


}
module.exports.help = {
    perm: "all",
    name: "ping"
}

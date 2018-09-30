const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
     if(user.displayAvatarURL.includes(".png" || ".jpg")){
            let embed = new Discord.RichEmbed()
                .setColor(`RANDOM`)
                .setAuthor(user.tag, user.displayAvatarURL)
                .setDescription(`[Avatar URL](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg?size=2048)`)
                .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg?size=2048`)
                .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL)
            message.channel.send(embed)
        } else 
            if (user.displayAvatarURL.includes(".gif")) {
                let embed = new Discord.RichEmbed()
                    .setColor(`RANDOM`)
                    .setAuthor(user.tag, user.displayAvatarURL)
                    .setDescription(`[Avatar URL](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif?size=2048)`)
                    .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif?size=2048`)
                    .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL)
                message.channel.send(embed)
            } else {
                return;
            }
}
module.exports.help = {
    perm: "all",
    name: "avatar",
    names: "Avatar"
};

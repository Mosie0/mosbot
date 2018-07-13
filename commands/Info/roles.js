const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setAuthor("Server Owner" + `\n` + message.guild.owner.user.username, message.guild.owner.user.avatarURL)
        .setThumbnail(sIcon)
        .addField("Server Roles", message.guild.roles.map(role => role.name).join(' \n '))
    message.channel.startTyping();
    message.channel.send(serverEmbed);
    await message.channel.stopTyping();
}

module.exports.help = {
    name: "roles"
}

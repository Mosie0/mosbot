const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription("Server Roles", message.guild.roles.map(role => role.name).join(' \n '))
        .setAuthor("Server Owner" + `\n` + message.guild.owner.user.username, message.guild.owner.user.avatarURL)
        .setThumbnail(sIcon)
    message.channel.startTyping();
    message.channel.send(serverEmbed);
    await message.channel.stopTyping();
}

module.exports.help = {
    name: "roles"
}

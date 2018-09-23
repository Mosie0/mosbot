const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    image = message.attachments.first().url;
    if(!image) return message.channel.send(`Sorry But you need to provide a Image!`)
    bot.user.setAvatar (image);
    await message.reply("Profile Photo has been changed!");
}
module.exports.help = {
    name: "setavatar",
    perm: "creator"
}

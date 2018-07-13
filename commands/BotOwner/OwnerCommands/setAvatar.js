const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry But this is a Bot Owner Only Command.");
    image = message.attachments.first().url;
    bot.user.setAvatar (image);
    await message.reply("Profile Photo has been changed!");
}
module.exports.help = {
    name: "setavatar"
}
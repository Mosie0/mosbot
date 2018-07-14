const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "283311727477784576") return;
    image = message.attachments.first().url;
    bot.user.setAvatar (image);
    await message.reply("Profile Photo has been changed!");
}
module.exports.help = {
    name: "setavatar"
}
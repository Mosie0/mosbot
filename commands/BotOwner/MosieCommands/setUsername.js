const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let newbotname = args.join(" ");
    if (!newbotname) return message.channel.send(`Sorry But you need to provide a new Name!!`)
    bot.user.setUsername(newbotname);
    await message.reply("Username has been changed! My New Name is " + "<@" + `${bot.user.id}` + ">");
}

module.exports.help = {
    name: "setname",
    perm: "creator"
}

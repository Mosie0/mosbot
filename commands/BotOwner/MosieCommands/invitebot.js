const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "283311727477784576") return;
    let botembed = new Discord.RichEmbed()
        .setColor("#00ffff")
        .setThumbnail(bot.user.avatarURL)
        .addField("Invite for the Bot", `[Click here for the Invite](https://discordapp.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`)
    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "invite"
}

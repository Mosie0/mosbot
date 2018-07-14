const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "288450828837322764") return message.reply("Sorry but right now this is a Private Bot!. For more Information please contact <@288450828837322764>");
    let bicon = ("");
    let botembed = new Discord.RichEmbed()
        .setColor("#00ffff")
        .setThumbnail(bot.user.avatarURL)
        .addField("Invite for the Bot", `[Click here for the Invite](https://discordapp.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`)
<<<<<<< HEAD:commands/BotOwner/MosieCommands/invitebot.js
    message.channel.startTyping();
=======
>>>>>>> ee55fa6f12425cd57157178952d0aa0c95a23106:commands/BotOwner/OwnerCommands/invitebot.js
    message.channel.send(botembed);
    message.delete().catch();
}
module.exports.help = {
    name: "invite"
}

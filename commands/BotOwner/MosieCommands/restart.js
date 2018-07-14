const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .addField("Restart Issued", `<@${message.author.id}> Has Restarted the Bot!`)
    .setThumbnail(bot.user.avatarURL)
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    .setTimestamp()
    const cantfindembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription(`Can't Find the **modlogs** Channel to Post my Restarting Message! **${bot.user.username}** Can't be Restart without that Channel!`)
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    let alert = message.guild.channels.find('name', "modlogs");
    if (!alert) return message.channel.send(cantfindembed);
    console.log(`Bot Has Been Restart By: ` + message.author.username);
    if (message.author.id !== "283311727477784576") return;
    await message.react("✅");
    await alert.send(botembed);
    message.delete(1000).catch();
    fs.writeFile('./log.json', JSON.stringify(`Bot has Been Restarted.`), (err) => {
        if (err) console.log(err)
    });
    process.exit();

}
module.exports.help = {
    name: "restart"
}
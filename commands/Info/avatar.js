const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let aTaged = message.mentions.users.first();
    if (!aTaged) {
        return message.channel.send(`Please Provide a User :wink:` + "\n **m!avatar @user**");
    }
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setImage(`${aTaged.displayAvatarURL}`)
        .setAuthor(`${aTaged.username}` , `${aTaged.displayAvatarURL}`)
        .setFooter("Command Ran By: " + message.author.username, message.author.displayAvatarURL);
    message.channel.send(botembed);   
}
module.exports.help = {
    perm: "all",
    name: "avatar"
};

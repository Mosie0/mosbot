const Discord = require("discord.js");
const Settings = require('../../models/settings.js');

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let cantembed = new Discord.RichEmbed()
        .setDescription(`:x: Can't Find the User to SoftBan :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.displayAvatarURL)
    if (!bUser) return message.channel.send(cantembed);
    let bReason = args.slice(1).join(" ");
    if (!bReason) bReason = "No Reason Provided";
    let nopermembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry but you need to have the Ban Permissions to use this command! :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.displayAvatarURL)
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(nopermembed);
    let nobanembed = new Discord.RichEmbed()
        .setDescription(`:x: Sorry but i can't SoftBan this user, they are a **Moderator/Admin** :x:`)
        .setTimestamp()
        .setColor(`#FF0000`)
        .setFooter(`Command Ran By: ${message.author.username}`, message.author.displayAvatarURL)
    if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nobanembed);
    let softbanembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setDescription(`You have been SoftBanned From **${message.guild.name}** For ${bReason}`)
        .setTimestamp()
        .setFooter(`Server Name: ${message.guild.name}`, message.guild.iconURL)
    let banEmbed = new Discord.RichEmbed()
        .setDescription("Member SoftBanned")
        .setColor("#0011FF")
        .addField("Kicked User", `${bUser}`, true)
        .addField("Moderator", `<@${message.author.id}>`, true)
        .addField("Reason for the Soft Ban", bReason)
    bUser.send(softbanembed);
    message.guild.member(bUser).ban(bReason);
    message.guild.unban(bUser.id)

    Settings.findOne({serverID: message.channel.guild.id}, (err, settings) => {
        if (err) console.log(err);
        if (settings) {
         if (settings.logchannel == "") return;
         let modlogs = message.guild.channels.get(settings.logchannel);
        if (!modlogs) return;
         modlogs.send(banEmbed); 
        }
      });
    message.delete().catch();
}

module.exports.help = {
    perm: "creator",
    name: "softban",
    names: "Softban"
}

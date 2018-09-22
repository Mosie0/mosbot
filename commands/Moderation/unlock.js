const Discord = require('discord.js');
const ms = require('ms');
const Settings = require('../../models/settings.js');
module.exports.run = async (bot, message, args) => {
    const nopermembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`<@${message.author.id}> You Don't have the Manage Guild Permission!`)
    let Moderatoruser = message.author.id;
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(nopermembed);
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    });
    const lockembed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setDescription(`<@${message.author.id}> This Channel is now Unlocked!`)
    message.channel.send(lockembed)

    Settings.findOne({serverID: message.channel.guild.id}, (err, settings) => {
        if (err) console.log(err);
        if (settings) {
         if (settings.logchannel == "") return;
         let modlogs = message.guild.channels.get(settings.logchannel);
        if (!modlogs) return;
    let modlogsembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .addField(`UNLOCKED`, `CHANNEL: <#${message.channel.id}> `)
        .addField(`Moderator:`, `<@${Moderatoruser}>`)
        .setTimestamp()
         modlogs.send(modlogsembed); 
    
        }
      });
    }
module.exports.help = {
    perm: "creator",
    name: "unlock",
    names: "Unlock"
}
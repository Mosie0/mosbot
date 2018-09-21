const Discord = require('discord.js');
const ms = require('ms');
const Settings = require('../../models/settings.js');
module.exports.run = async (bot, message, args) => {
    const nopermembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setDescription(`<@${message.author.id}> You Don't have the Manage Messages Permission!`)
        let Moderatoruser = message.author.id;
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    message.channel.overwritePermissions(message.guild.id, { 
        SEND_MESSAGES: false,
        READ_MESSAGES: true,
        READ_MESSAGE_HISTORY: true,
        ADD_REACTIONS: false,
        USE_EXTERNAL_EMOJIS: false,
        CREATE_INSTANT_INVITE: false,
        MANAGE_CHANNEL: false,
        MANAGE_PERMISSIONS: false,
        MANAGE_WEBHOOKS: false,
        SEND_TTS_MESSAGES: false,
        MANAGE_MESSAGES: false,
        EMBED_LINKS: false,
        ATTACH_FILES: false,
        MENTION_EVERYONE: false
    });
    const lockembed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setDescription(`<@${message.author.id}> This Channel is now in Lockdown Mode to Deactivate the LockDown do **m!unlock**`)
    message.channel.send(lockembed)

    Settings.findOne({serverID: message.channel.guild.id}, (err, settings) => {
        if (err) console.log(err);
        if (settings) {
         if (settings.logchannel == "") return;
         let modlogs = message.guild.channels.get(settings.logchannel);
        if (!modlogs) return;
    let modlogsembed = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setTitle(`LOCKDOWN IN <#${message.channel.id}>`)
        .addField(`Moderator:`, `<@${Moderatoruser}`)
        .setTimestamp()
         modlogs.send(modlogsembed); 
    
        }
      });
    }
    
module.exports.help = {
    name: "lockdown"
}
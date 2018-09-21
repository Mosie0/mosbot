const Discord = require('discord.js');
const Settings = require('../../models/settings.js');
module.exports.run = async (bot, message, args) => {
    try {
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Can't use this command`).then(message => {message.delete(10000).catch()})
        if (!args[0]) return message.channel.send('Please Provide a Link!\nExample `m!createemoji linkhere namehere`')
        if (!args[1]) return message.channel.send('Please Provide a Name!\nExample `m!createemoji linkhere namehere`')
        let Moderatoruser = message.author.id;
        message.guild.createEmoji(args[0], args[1])
            .then(emoji => {
                let embed = new Discord.RichEmbed()
                    .setColor(`RANDOM`)
                    .setDescription(`Created the Emoji! **${emoji.name}** ${emoji}`)
                    .setImage(emoji.url)
                message.channel.send(embed)
            let modlogsembed = new Discord.RichEmbed()
             .setColor(`FF0000`)
              .setDescription(`Created an Emoji! **${emoji.name}**, ${emoji}, Moderator User: <@${Moderatoruser}`)
            })
            .catch(console.error);
    } catch (e) {
        message.channel.send(`ERROR\n${e}`)
    }
}
Settings.findOne({serverID: message.channel.guild.id}, (err, settings) => {
    if (err) console.log(err);
    if (settings) {
     if (settings.logchannel == "") return;
     let modlogs = message.guild.channels.get(settings.logchannel);
    if (!modlogs) return;
     modlogs.send(modlogsembed); 
    }
  });
module.exports.help = {
    name: "createemoji",
    names: "CreateEmoji"
}

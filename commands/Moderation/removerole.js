const Discord = require("discord.js");
const Settings = require('../../models/settings.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry pal, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Couldn't find that user, yo.");
    let role = args.slice(1).join(" ");
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(c => c.name === role) || message.guild.roles.find(c => c.id === role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await (rMember.removeRole(gRole.id));

    let modlogsembed = new Discord.RichEmbed()
    .setColor("FF0000")
    .addField(`Member Involved`, rMember)
    .addField(`Role Lost:`, gRole)

    let roleremove = new Discord.RichEmbed()
    .setColor("FF0000")
    .addField(`Guild Name`, `${message.guild.name}`)
    .addField(`Role Lost`, gRole.name)
    .setTimestamp()

    try {
        await rMember.send(roleremove)
    } catch (e) {
        message.channel.send(`<@${rMember.id}>, Sorry but you ware removed from ${gRole.name} role I've Tried Dming the <@${rMember.id}> but their Dms are Closed.`)
    }
    message.delete().catch();

    Settings.findOne({serverID: message.channel.guild.id}, (err, settings) => {
        if (err) console.log(err);
        if (settings) {
         if (settings.logchannel == "") return;
         let modlogs = message.guild.channels.get(settings.logchannel);
        if (!modlogs) return;
         modlogs.send(modlogsembed); 
        }
      });
}

module.exports.help = {
    name: "removerole",
    names: "role-"
}

const Discord = require("discord.js");
const Settings = require('../../models/settings.js');
module.exports.run = async (bot, message, args) => {

    //m!role+ @andrew Dog Person
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry pal, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Sorry please check again i don't see that user.");
    let role = args.slice(1).join(" ");
    if (!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(c => c.name === role) || message.guild.roles.find(c => c.id === role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
    await (rMember.addRole(gRole.id));
    
    let modlogsembed = new Discord.RichEmbed()
    .setColor("FF0000")
    .addField(`Member Involved`, rMember)
    .addField(`Role Given:`, gRole)

    let dmroleadd = new Discord.RichEmbed()
    .setColor("FF0000")
    .addField(`Guild Name`, `${message.guild.name}`)
    .addField(`Role Given`, gRole.name)

    try {
        await rMember(dmroleadd)
    } catch (e) {
        message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. I've Tried Dming the <@${rMember.id}> but their Dms are Closed.`)
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
    name: "addrole",
    names: "role+"
}

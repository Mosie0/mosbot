const Discord = require("discord.js");
const Settings = require("../../models/settings.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!kUser) return message.channel.send("Cound't Find the user to Kick them!!");
    let kReason = args.slice(1).join(" ")
    if(!kReason) kReason = "No Reason Provided";
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry but you don't have the Kick Memebrs Permission");
    if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person has Staff Permissions in the server!!");
    
	let kickembed = new Discord.RichEmbed()
    .setColor("#0011FF")
    .setDescription(`Member Kicked`)
    .setFooter(kUser.id)
    .addField(`Kicked User`, kUser, true)
    .addField(`Moderator`, `<@${message.author.id}>`, true)
    .addField(`Channel`, message.channel, true)
    .setTimestamp()
    .addField(`Reason`, kReason)
    
    Settings.findOne({serverID: message.channel.guild.id}, (err, settings) => {
        if (err) console.log(err);
        if (settings) {
         if (settings.logchannel == "") return;
         let modlogs = message.guild.channels.get(settings.logchannel);
        if (!modlogs) return;
         modlogs.send(kickembed); 
        }
      });
    message.guild.member(kUser).kick(kReason);
    message.delete().catch();
}

module.exports.help = {
    perm: "admins",
    name: "kick"
}

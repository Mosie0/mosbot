const Discord = require("discord.js");
const Settings = require('../../models/settings.js');
module.exports.run = async (bot, message, args) => {
    let nopermembed = new Discord.RichEmbed()
    .setColor("FF0000")
    .setDescription(`${message.author}, This is a Bot Owner command only!`)
        if (message.author.id !== "283311727477784576" && message.author.id !== "288450828837322764") return message.channel.send(nopermembed);
    let Moderatoruser = message.author.id;
    let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send(`You need to Provide a Reason! <@${message.author.id}>`);
    let rUser = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.channel.send('You need to Mention a user for me to dm them!').catch(console.error);
    message.channel.send(`** ✅ ${rUser.tag} Has been dmed.**`)
    const dmembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`Dm from **${message.guild.name}**: **${reason}**`)
    rUser.send(dmembed)

    const modlogsdmembed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setDescription(`Dm to ${rUser}, from <@${Moderatoruser}>, reason: ${reason}`)
    
    Settings.findOne({serverID: message.channel.guild.id}, (err, settings) => {
        if (err) console.log(err);
        if (settings) {
         if (settings.logchannel == "") return;
         let modlogs = message.guild.channels.get(settings.logchannel);
        if (!modlogs) return;
         modlogs.send(modlogsdmembed); 
        }
      });
    
    await message.delete().catch();
}

module.exports.help = {
    name: "dm",
    names: "Dm"
}

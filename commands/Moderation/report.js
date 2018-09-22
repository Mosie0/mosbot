const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Couldn't find that user!");
    let reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send(`Please provide a valid reason to report the person for.`)
    let sIcon = message.guild.iconURL;
    let reportEmbed = new Discord.RichEmbed()
        .setTitle("User Report")
        .setColor("#2CE51A")
        .setThumbnail("https://cdn.discordapp.com/attachments/444028025932349441/445824984204705792/tenor_12.gif")
        .setFooter(message.guild.createdAt, sIcon)
        .addField("Reported User", `${rUser}`, true)
        .addField("Reported By", `${message.author}`, true)
        .addField("Reported in Channel:", message.channel)
        .addField("Reason", reason);

    let dmEmbed = new Discord.RichEmbed()
        .setTitle("Your Report")
        .setColor("#2CE51A")
        .addField("Reported By", `${message.author}`, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/434973905485037578/434976194622914561/user_report.gif")
        .addField("Reported User", `${rUser}`,true)
        .addField("Thank You", "Your Report has been given to the Moderators of the Server, They will get back to you shortly.")
    let reportschannel = message.guild.channels.find(c => c.name === "modlogs");
    if (!reportschannel) return message.channel.send("Couldn't find modlogs");
    message.delete().catch();
    reportschannel.send(reportEmbed);
    message.author.send(dmEmbed);
}
module.exports.help = {
    perm: "all",
    name: "report"
}

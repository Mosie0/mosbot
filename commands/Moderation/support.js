const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let reason = args.join(" ").slice(22);

    let sIcon = message.guild.iconURL;


    let reportEmbed = new Discord.RichEmbed()

        .setTitle("User Report")
        .setColor("RANDOM")
        .setThumbnail("https://cdn.discordapp.com/attachments/444028025932349441/445824984204705792/tenor_12.gif")
        .setFooter(message.guild.createdAt, sIcon)
        .addField("Support Message by:", `${message.author}`, true)
        .addField("Support in Channel:", message.channel)
        .addField("Reason", reason);

    let dmEmbed = new Discord.RichEmbed()
        .setTitle("Your Support Message")
        .setColor("RANDOM")
        .addField("Reported By", `${message.author}`, true)
        .setThumbnail("https://cdn.discordapp.com/attachments/434973905485037578/434976194622914561/user_report.gif")
        .addField("Thank You", "Your Support Message has been sent to the Devleopers of the Server, They will get back to you shortly.")



    let reportschannel = message.guild.channels.find(`name`, "modlogs");
    if (!reportschannel) return message.channel.send("Couldn't find modlogs");

    message.delete().catch();

    reportschannel.send(reportEmbed);
    message.author.send(dmEmbed);


    if (!message.content.startsWith(prefix)) return;



}


module.exports.help = {
    name: "botsuggestion"
}
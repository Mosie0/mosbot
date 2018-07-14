const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setDescription("[Bot Information](https://discord.gg/krXDXEM)")
        .setColor("#000FF")
        .setThumbnail(bicon)
        .addField("Bot Name", "<@" + `${bot.user.id}` + ">", true)
        .addField("Bot Invite Link", `[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`, true)
        .addBlankField()
        .addField("To see other commands do", "**m!help**", true)
        .addField("Created On", "**July 13th 2018**", true)
        .addField("Servers In", string)
        .setFooter("Creator of the Bot: SUPERCHIEFYT & Mo_sie");
    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}

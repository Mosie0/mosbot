const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setDescription("[Bot Information](https://discord.gg/hgsM86w)")
        .setColor("#000FF")
        .setThumbnail(bicon)
        .addField("Bot Name", "<@" + `${bot.user.id}` + ">", true)
        .addField("Bot Invite Link", "[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=455166272339181589&permissions=8&scope=bot)", true)
        .addBlankField()
        .addField("To see other commands do", "**s!help**", true)
        .addField("Created On", "**June 9th 2018**", true)
        .addField("Servers In", string)
        .setFooter("Creator of the Bot: SUPERCHIEFYT");
    message.channel.startTyping();
    message.channel.send(botembed);
    await message.channel.stopTyping();
}

module.exports.help = {
    name: "botinfo"
}
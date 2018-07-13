const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const usernameid = "Command Ran By: " + message.author.username;
    const usernameurl = message.author.avatarURL;
    let replyembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription("This is a Bot Owner Command Only! For More Infomation Please Contact <@288450828837322764>")
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setFooter("Commnad Ran By: " + message.author.username, message.author.avatarURL)
    if (message.author.id !== "288450828837322764") return message.channel.send(replyembed);
try {
    let code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
   let cleanembed = new Discord.RichEmbed()
   .setColor("#000FF")
   .setDescription(("x1", clean(evaled)))
   .setFooter(usernameid, usernameurl)
   message.channel.send(cleanembed);

} catch (err) {
    
    let botembed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setDescription(`\`ERROR\` \'\'\'x1\n${clean(err)}\n\`\'\``)
    .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL)
    message.channel.send(botembed);
}
}

function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}


module.exports.help = {
    name: "eval"
}
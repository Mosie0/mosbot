const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, ops2) => {
    if (message.author.id !== "288450828837322764" && message.author.id !== "283311727477784576") return;
    try {
        let code = args.join(" ");
        if (!code) return message.channel.send(`Sorry But you need to provide the Args to use the command.`)
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
        evaled = evaled.replace(bot.token, 'I took a hammer to this token :hammer:');
        evaled = evaled.replace(process.env.usermongodb, ':hammer: :hammer: :hammer: ');
        evaled = evaled.replace(process.env.passmongodb, 'This password doesn\'t exist. I blew it up :bomb:');
        evaled = evaled.replace(process.env.FORTNITE_API_KEY, 'ab234ndkjxslsdfpw320 Oh wait, I blew up the real token :bomb:');
        evaled = evaled.replace(process.env.GIPHY_API_KEY, 'S5BhFb5:bomb: Yeah, let\'s not...');
        evaled = evaled.replace(process.env.DBL, '6uiIsIn:bomb: Yeah, let\'s not...');
              
        let cleanembed = new Discord.RichEmbed()
            .setColor("#000FF")
            .setDescription(`📥Input\n\n${code}\n\n📤Output\n\n${clean(evaled)}`)
        message.channel.send(cleanembed);
    } catch (err) {
        let botembed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .addField(`📥Input`, args.join(' '), true)
            .addField(`📤Output`, `\`ERROR\` \'\'\'x1\n${(err)}\n\`\'\``, true)
        message.channel.send(botembed);
    }
    
    function clean(text) {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
}
module.exports.help = {
    perm: "creator",
    name: "eval"
}

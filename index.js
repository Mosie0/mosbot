//=============================================================================================================================================================================================
// Start of the bot requirements etc.

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 2;
bot.login(process.env.BOT_TOKEN)

// End of the Bot Requirements etc.
//=============================================================================================================================================================================================
// Start Of the bot.on Messages.

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

    bot.user.setActivity(`${bot.guilds.size} Servers`, { type: "LISTENING"});

});
bot.on("guildMemberAdd", async member => {
    member.send(`Welcome to the Server ${member} <a:Cheer:446237254499958795>`)
    let serverSize = member.guild.memberCount;
    let botCount = member.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
    let welcome = member.guild.channels.find('name', '👋welcome👋')
    let welcomeembed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(`Welcome to **${member.guild.name}** ${member}!!! So glad that you are here! :smile:<:Hype:446237019283259422>:wave:<a:Cheer:446237254499958795>`)
    .addField(`Total Users`, `${humanCount}`, true)
    .setAuthor(member, member.user.username)
    welcome.send(welcomeembed);
    let modlogs = member.guild.channels.find('name', "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#1CFF00")
        .setAuthor('Member Joined', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    await modlogs.send(botembed);
});
bot.on("guildMemberRemove", async member => {
    member.send(`Awww, bye ${member}, we will miss you, if you ever wanna come back, here is the invite: discord.gg/krXDXEM`)
    let guild = member.guild;
    let modlogs = member.guild.channels.find('name', "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Left', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    modlogs.send(botembed);
});
bot.on(`guildBanAdd`, (guild, user) => {
    let modlogs = guild.channels.find('name', "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Banned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    modlogs.send(botembed);
});
bot.on(`guildBanRemove`, (guild, user) => {
    let modlogs = guild.channels.find('name', "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#12FF00")
        .setAuthor('Member Unbanned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    modlogs.send(botembed);
});
bot.on(`channelCreate`, async channel => {
    let guild = channel.guild;
    let modlogs = guild.channels.find('name', "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Channel Created', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name<#${channel.id}> (**${channel.name}**) \n ►Type **${channel.type}** \n ►ID **${channel.id}**`)
    await modlogs.send(botembed);
});
bot.on(`channelDelete`, channel => {
    let guild = channel.guild;
    let modlogs = guild.channels.find('name', "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Channel Deleted', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${channel.name}**\n ►Type **${channel.type}**\n ►ID ${channel.id}\n ►Position ${channel.position}`)
    modlogs.send(botembed);
});
bot.on("message", async message => {

    if (message.author.bot) return;
    const dmembeds = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription(message.content)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setFooter(`DM Recieved At`, bot.user.avatarURL)
    const dmreplies = new Discord.WebhookClient(`${process.env.DMWEBHOOKID}`, `${process.env.DMWEBHOOKTOKEN}`);
    if (message.channel.type === "dm") return dmreplies.send(dmembeds);
   const prefixes = ['m!', 'M!'];
    let prefix = false;
    for (const thisPrefix of prefixes) {
        if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;
    }
    if (!prefix) return;
    if (!message.content.startsWith(prefix)) return;
    if (cooldown.has(message.author.id)) {
        message.delete();
        return message.reply("You have to wait 5 seconds between commands.")
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        cooldown.add(message.author.id);
    }


    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});

// End of the bot.on Message.
//==============================================================================================================================================================================================
// Start of Getting and Loading the Commands

fs.readdir("./commands/Fun", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Fun commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Fun/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});

fs.readdir("./commands/Info/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't Info find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Info/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});

fs.readdir("./commands/Moderation/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Moderation commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/Moderation/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});

fs.readdir("./commands/BotOwner", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find Bot Owner commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
fs.readdir("./commands/BotOwner/MosieCommands", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find BotOwner/MosieCommands commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/BotOwner/MosieCommands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        bot.commands.set(props.help.names, props);
    });
});
// End of Getting Commands.
//=============================================================================================================================================================================================

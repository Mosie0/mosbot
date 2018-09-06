//=============================================================================================================================================================================================
// Start of the bot requirements etc.

const botconfig = require("./botconfig.json"),
    Discord = require("discord.js"),
    fs = require("fs"),
    mongoose = require("mongoose");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 2;
let Settings = require("./models/settings.js");
bot.login(process.env.BOT_TOKEN)
mongoose.connect(`mongodb://${process.env.usermongodb}:${process.env.passmongodb}@mosbot-shard-00-00-wfckx.mongodb.net:27017/account?ssl=true&replicaSet=MosBot-shard-0&authSource=admin&retryWrites=true`, {useNewUrlParser: true});

// End of the Bot Requirements etc.
//=============================================================================================================================================================================================
// Start Of the bot.on Messages.

bot.on("ready", async () => {
    bot.guilds.forEach(guild => {
    Settings.findOne({serverID: guild.id}, (err, settings) => {
      if (err) console.log(err);
      if (!settings) {
        const newSettings = new Settings({
          serverName: guild.name,
          serverID: guild.id,
          prefix: "",
          logchannel: "",
          adminrole: "",
          autorole: { enabled: false, role: ""},
          userjoin: { enabled: false, message: "", channel: "", dm: false },
          userleave: { enabled: false, message: "", channel: "", dm: false },
          userlevel: { enabled: false, message: "", channel: "", dm: false },
        });

        newSettings.save().catch(err => console.log(err));
      }
    });
  });
    
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    console.log(`Ready. 👌`);
    require("./utils/playing.js")(bot);
});
bot.on("guildMemberAdd", async member => {
    let serverSize = member.guild.memberCount;
    let botCount = member.guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
    let welcome = member.guild.channels.find('name', '👋welcome👋')
    let welcomeembed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(`Welcome to **${member.guild.name}** ${member}!!! So glad that you are here! :smile:<:Hype:446237019283259422>:wave:<a:Cheer:446237254499958795>`)
    .addField(`Total Users`, `${humanCount}`, true)
    .setAuthor(member, member.user.avatarURL)
    .setAuthor(member.user.username, member.user.avatarURL)
    if (!welcome) return;
    welcome.send(welcomeembed);
    let modlogs = member.guild.channels.find('name', "modlogs");
    let botembed = new Discord.RichEmbed()
        .setColor("#1CFF00")
        .setAuthor('Member Joined', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    Settings.findOne({serverID: member.guild.id}, (err, settings) => {
      if (err) console.log(err);
      if (settings) {
       if (settings.logchannel !== "") return;
       let modlogs = guild.channels.get(settings.logchannel);
       if (!modlogs) return;
       modlogs.send(botembed); 
      }
    });
});
bot.on("guildMemberRemove", async member => {
   let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Left', member.user.avatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.avatarURL)
    Settings.findOne({serverID: member.guild.id}, (err, settings) => {
      if (err) console.log(err);
      if (settings) {
       if (settings.logchannel !== "") return;
       let modlogs = guild.channels.get(settings.logchannel);
       if (!modlogs) return;
       modlogs.send(botembed); 
      }
    });
});
bot.on(`guildBanAdd`, (guild, user) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Banned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    Settings.findOne({serverID: member.guild.id}, (err, settings) => {
      if (err) console.log(err);
      if (settings) {
       if (settings.logchannel !== "") return;
       let modlogs = guild.channels.get(settings.logchannel);
       if (!modlogs) return;
       modlogs.send(botembed); 
      }
    });
});
bot.on(`guildBanRemove`, (guild, user) => {
    let botembed = new Discord.RichEmbed()
        .setColor("#12FF00")
        .setAuthor('Member Unbanned', user.avatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.avatarURL)
    Settings.findOne({serverID: member.guild.id}, (err, settings) => {
      if (err) console.log(err);
      if (settings) {
       if (settings.logchannel !== "") return;
       let modlogs = guild.channels.get(settings.logchannel);
       if (!modlogs) return;
       modlogs.send(botembed); 
      }
    });
});
bot.on(`channelCreate`, async channel => {
    let guild = channel.guild;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Channel Created', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name<#${channel.id}> (**${channel.name}**) \n ►Type **${channel.type}** \n ►ID **${channel.id}**`)
    Settings.findOne({serverID: member.guild.id}, (err, settings) => {
      if (err) console.log(err);
      if (settings) {
       if (settings.logchannel !== "") return;
       let modlogs = guild.channels.get(settings.logchannel);
       if (!modlogs) return;
       modlogs.send(botembed); 
      }
    });
});
bot.on(`channelDelete`, channel => {
    let guild = channel.guild;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Channel Deleted', channel.guild.iconURL)
        .setFooter(`ID: ${channel.id}`)
        .setTimestamp()
        .setDescription(`_ _►Name **${channel.name}**\n ►Type **${channel.type}**\n ►ID ${channel.id}\n ►Position ${channel.position}`)
    Settings.findOne({serverID: member.guild.id}, (err, settings) => {
      if (err) console.log(err);
      if (settings) {
       if (settings.logchannel !== "") return;
       let modlogs = guild.channels.get(settings.logchannel);
       if (!modlogs) return;
       modlogs.send(botembed); 
      }
    });
});
bot.on('guildCreate', (guild) => {
  Settings.findOne({serverID: guild.id}, (err, settings) => {
    if (err) console.log(err);
    if (!settings) {
      const newSettings = new Settings({
        serverName: guild.name,
        serverID: guild.id,
        prefix: "",
        logchannel: "",
        adminrole: "",
        autorole: { enabled: false, role: ""},
        userjoin: { enabled: false, message: "", channel: "", dm: false },
        userleave: { enabled: false, message: "", channel: "", dm: false },
        userlevel: { enabled: false, message: "", channel: "", dm: false },
      });

      newSettings.save().catch(err => console.log(err));
    }
  });
});

bot.on('guildCreate', async guild => {
    require('./playing.js')(bot)
    const newserverembed = new Discord.RichEmbed()
        .setColor(`#FF000`)
        .setDescription(`Server Added`)
        .setThumbnail(guild.iconURL)
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .addField(`Guild Name`, `${guild.name}`, true)
        .addField(`Guild ID`, `${guild.id}`, true)
        .addField(`Guild Owner`, `${guild.owner}`, true)
        .addField(`Guild Owner ID`, `${guild.ownerID}`, true)
        .addField(`Guild Member Count`, `${guild.memberCount}`, true)
        .addField(`Guild Server Region`, `${guild.region}`, true)
        .addField(`Guild Verification Level`, `${guild.verificationLevel}`, true)
    bot.channels.get('422057529271648256').send(newserverembed);
    bot.users.get('283311727477784576').send(newserverembed)

});

bot.on('guildMemberUpdate', async (oldMember, newMember) => {
    let modlogs = oldMember.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    if (newMember.nickname === oldMember.nickname) return
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(newMember.user.tag, newMember.user.avatarURL)
        .setThumbnail(newMember.user.avatarURL)
        .setTitle(`Nickname Changed`)
        .addField(`Old Nickname`, `${oldMember.nickname ? `${oldMember.nickname}` : `${oldMember.user.username}`}`)
        .addField(`New Nickname`, `${newMember.nickname ? `${newMember.nickname}` : `${newMember.user.username}`}`)
        .setTimestamp()
    modlogs.send(embed)
})

bot.on("emojiCreate", async (emoji, bot) => {
    let modlogs = emoji.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`GREEN`)
        .setThumbnail(emoji.url)
        .setTitle(`New Emoji Created`)
        .setDescription(`Info`)
        .addField(`Name`, emoji.name, true)
        .addField(`ID`, emoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
        .addField(`Animated?`, emoji.animated, true)
        .setTimestamp(emoji.createdAt)
        .setFooter(`Emoji Created At`)
    modlogs.send(embed)
});

bot.on("emojiDelete", async (emoji, bot) => {
    let modlogs = emoji.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setThumbnail(emoji.url)
        .setTitle(`Emoji Deleted`)
        .setDescription(`Info`)
        .addField(`Name`, emoji.name, true)
        .addField(`ID`, emoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
        .addField(`Animated?`, emoji.animated, true)
        .setTimestamp(emoji.createdAt)
        .setFooter(`Emoji Deleted At`)
    modlogs.send(embed)
});

bot.on("emojiUpdate", async (oldEmoji, newEmoji) => {
    let modlogs = newEmoji.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`PURPLE`)
        .setThumbnail(newEmoji.url)
        .setTitle(`Emoji Updated`)
        .setDescription(`Info`)
        .addField(`OldName`, oldEmoji.name, true)
        .addField(`NewName`, newEmoji.name, true)
        .addField(`ID`, newEmoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${newEmoji.url})`, true)
        .addField(`Animated?`, newEmoji.animated, true)
        .setTimestamp(newEmoji.createdAt)
        .setFooter(`Emoji Updated At`)
    modlogs.send(embed)
});

bot.on(`messageUpdate`, (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    let modlogs = oldMessage.guild.channels.find(c => c.name === "modlogs");
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTimestamp()
        .setAuthor(`Message Updated By ${newMessage.author.tag}`, `${newMessage.author.avatarURL}`)
        .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
        .setDescription(`_ _►Content: \n ►Old Message **\`${oldMessage.cleanContent}\`** \n ►Update Message **\`${newMessage.cleanContent}\`** \n ►Channel <#${newMessage.channel.id}> \n ►Message ID ${newMessage.id}`)
    modlogs.send(botembed);
});

bot.on('guildUpdate', (oldguild, guild) => {
  Settings.findOne({serverID: guild.id}, (err, settings) => {
    if (err) console.log(err);
    if (!settings) {
      const newSettings = new Settings({
        serverName: guild.name,
        serverID: guild.id,
        prefix: "",
        logchannel: "",
        adminrole: "",
        autorole: { enabled: false, role: ""},
        userjoin: { enabled: false, message: "", channel: "", dm: false },
        userleave: { enabled: false, message: "", channel: "", dm: false },
        userlevel: { enabled: false, message: "", channel: "", dm: false },
      });

      newSettings.save().catch(err => console.log(err));
    } else {
      settings.serverName = guild.name;
      settings.save().catch(err => console.log(err));
    }
  });
});


bot.on('guildDelete', (guild) => {
  Settings.findOneAndRemove({serverID: guild.id}).catch((err) => console.log(err));
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

const Discord = require('discord.js'),
    clip = "➥",
    truee = "<:yes:458348060163178516>",
    falsee = "<:no:458348057130565642>";
 
let Setting = require("../models/settings.js");
 
module.exports.run = (bot, message, args) => {
    Setting.findOne({serverID: message.guild.id}, (err, settings) => {
        if (err) console.log(err);
        if (!settings) {
            return message.channel.send(`Hmm this is wierd. Looks like your server doesn't have an file with the bot\nIf this happens you might want to readd the bot to the server.`);
        }
    });
    let embed = new Discord.RichEmbed()
        .setColor(0x36393E)
        .setDescription(`Error: No description set.`)
        .setThumbnail(message.guild.iconURL);
 
    Setting.findOne({serverID: message.guild.id}, (err, setting) => {
        if (err) console.log(err);
        if (!setting) { return message.channel.send("Error"); }
        embed.setTitle(`RHG Settings for ${message.guild.name}`);
        embed.setDescription(`Thease are your current settings.`);
        embed.addField(`
**Welcome Greetings: | ${setting.userjoin.enabled == true ? "Enabled" : "Disabled"} | ${setting.userjoin.enabled == true ? truee : falsee}**`,
`    ${clip} DM: ${setting.userjoin.dm == true ? "Yes" : "No"}
    ${clip} Channel:  ${setting.userjoin.channel == "" ? "None" : "<#" + setting.userjoin.channel + ">"}
    ${clip} Message: ${setting.userjoin.message == "" ? "Default" : setting.userjoin.message}`);
 
        embed.addField(`
**Leave Greetings: | ${setting.userleave.enabled == true ? "Enabled" : "Disabled"} | ${setting.userleave.enabled == true ? truee : falsee}**`,
`    ${clip} DM: ${setting.userleave.dm == true ? "Yes" : "No"}
    ${clip} Channel:  ${setting.userleave.channel == "" ? "None" : "<#" + setting.userleave.channel + ">"}
    ${clip} Message: ${setting.userleave.message == "" ? "Default" : setting.userleave.message}
    `);
 
        embed.addField(`
**Autorole: | ${setting.autorole.enabled == true ? "Enabled" : "Disabled"} | ${setting.autorole.enabled == true ? truee : falsee}**`,
`    ${clip} Role: ${setting.autorole.role == "" ? "None" : "<@&" + setting.autorole.role + ">"}
`);
        embed.addField(`
**Leveling Messages: | ${setting.userlevel.enabled == true ? "Enabled" : "Disabled"} | ${setting.userlevel.enabled == true ? truee : falsee}**`,
`    ${clip} DM: ${setting.userlevel.dm == true ? "Yes" : "No"}
    ${clip} Channel: ${setting.userlevel.channel == "" ? "None" : "<#" + setting.userlevel.channel + ">"}
    ${clip} Message: ${setting.userlevel.message == "" ? "Default" : setting.userlevel.message}
    `);
 
        embed.addField(`
**Miscellaneous: **`,
`    ${clip} Prefix: ${setting.prefix == "" ? "Default [r;]" : setting.prefix}
    ${clip} Log Channel: ${setting.logchannel == "" ? "None" : "<#" + setting.logchannel + ">"}
    ${clip} Admin Role: ${setting.adminrole == "" ? "None" : "<@&" + setting.adminrole + ">"}
    `);
 
        embed.addField(`To Change`, `
**1** to change *Welcome Greetings*.
**2** to change *Leave Greetings*.
**3** to change *AutoRole settings*.
**4** to change *Level Messages*.
**5** to change *Miscellaneous settings*.
_*Settings page will timeout after 1 minute.*_
`);
        let settingPage = "",
            cleansettingPage = "",
            settingType = "",
            cleansettingType = "";
        message.channel.send(embed).then(embedmessage => {
            message.channel.awaitMessages(m => ((m.content > 0 && m.content <= 5) || m.content == "quit") && m.author.id == message.author.id, {max: 1, time: 60000, errors: ['time']})
            .catch(err => { console.log(err); message.delete(2000); })
            .then(collected => {
                collected.first().delete(2000);
                message.delete(2000);
                embedmessage.delete(2000);
 
                let embed = new Discord.RichEmbed()
                    .setColor(0x36393E)
                    .setDescription(`Error: No description set.`)
                    .setTitle(`Error: No title set.`)
                    .setFooter(``)
                    .setThumbnail(message.guild.iconURL);
                //  message.channel.send(`Okay I'll now add **${videos[collected.first().content-1].title}**`).then(m => m.delete(5000))
                //parseUpload(bot, server, `https://www.youtube.com/watch?v=${videos[collected.first() - 1].id}`, message);
                if (collected.first().content == "1") {
                    settingPage = "userjoin";
                    cleansettingPage = "Join";
                    embed.setDescription(`
Which welcome settings would you like to change?\n
**1** Enabled **${setting.userjoin.enabled == true ? "Yes" : "No"}**
**2** DM **${setting.userjoin.dm == true ? "Yes" : "No"}**
**3** Channel **${setting.userjoin.channel == "" ? "None" : "<#" + setting.userjoin.channel + ">"}**
**4** Message **${setting.userjoin.message == "" ? "None" : setting.userjoin.message}**`);
                } else if (collected.first().content == "2") {
                    settingPage = "userleave";
                    cleansettingPage = "Leave";
                    embed.setDescription(`
Which leave settings would you like to change?\n
**1** Enabled **${setting.userleave.enabled == true ? "Yes" : "No"}**
**2** DM **${setting.userleave.dm == true ? "Yes" : "No"}**
**3** Channel **${setting.userleave.channel == "" ? "None" : "<#" + setting.userleave.channel + ">"}**
**4** Message **${setting.userleave.message == "" ? "None" : setting.userleave.message}**`);
                } else if (collected.first().content == "3") {
                    settingPage = "autorole";
                    cleansettingPage = "Auto Role";
                    embed.setDescription(`
Which autorole settings would you like to change?\n
**1** Enabled **${setting.autorole.enabled == true ? "Yes" : "No"}**
**2** Role **${setting.autorole.role == "" ? "None" : "<@&" + setting.autorole.role + ">"}**`);
                } else if (collected.first().content == "4") {
                    settingPage = "userlevel";
                    cleansettingPage = "Level";
                    embed.setDescription(`
Which level notification settings would you like to change?\n
**1** Enabled **${setting.userlevel.enabled == true ? "Yes" : "No"}**
**2** DM **${setting.userlevel.dm == true ? "Yes" : "No"}**
**3** Channel **${setting.userlevel.channel == "" ? "None" : "<#" + setting.userlevel.channel + ">"}**
**4** Message **${setting.userlevel.message == "" ? "None" : setting.userlevel.message}**`);
                } else if (collected.first().content == "5") {
                    settingPage = "other";
                    cleansettingPage = "Miscellaneous";
                    embed.setDescription(`
Which miscellaneous settings would you like to change?\n
**1** Prefix **${setting.prefix == "" ? "r;" : setting.prefix}**
**2** Log Channel **${setting.logchannel == "" ? "None" : "<#" + setting.logchannel + ">"}**
**3** Admin Role **${setting.adminrole == "" ? "None" : "<@&" + setting.adminrole + ">"}**`);
                }
                embed.setTitle(`Editing ${cleansettingPage} Settings`);
                embed.setFooter(`THIS MENU DOESN'T YET WORK JUST RIGHT.`);
                if (settingPage == "") {
                    embed.setTitle(`Canceled`);
                    embed.setDescription(`Your command process has been canceled.`);
                    embed.setThumbnail(null);
                    embed.setFooter(``);
                    message.channel.send(embed).then(m=>m.delete(25000));
                    return;
                }
                message.channel.send(embed).then(embedmessage => {
                    message.channel.awaitMessages(m => ((m.content > 0 && m.content <= 5) || m.content == "quit") && m.author.id == message.author.id, {max: 1, time: 30000,errors: ['time']})
                    .catch(err => { console.log(err); message.delete(2000);})
                    .then(collected => {
                        collected.first().delete(2000);
                        message.delete(2000);
                        embedmessage.delete(2000);
 
                        let embed = new Discord.RichEmbed()
                            .setColor(0x36393E)
                            .setDescription(`Error: No description set.`)
                            .setTitle(`Error: No title set.`)
                            .setFooter(``)
                            .setThumbnail(message.guild.iconURL);
 
                        if (collected.first().content == "1" && settingPage == "userjoin") {
                            settingType = "enabled";
                            cleansettingType = "Enabled";
                            embed.setDescription(`
You are currently changing the Enabled setting on Welcome.\n
Current Setting: **${setting.userjoin.enabled == true ? "Yes" : "No"}**
 
*Please type true to enable or false to disable below or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "userjoin") {
                            settingType = "dm";
                            cleansettingType = "DM";
                            embed.setDescription(`
You are currently changing the DM setting on Welcome.\n
Current Setting: **${setting.userjoin.dm == true ? "Yes" : "No"}**
 
*Please type true to enable or false to disable below or type quit to stop.*
`);
                        } else if (collected.first().content == "3" && settingPage == "userjoin") {
                            settingType = "channel";
                            cleansettingType = "Channel";
                            embed.setDescription(`
You are currently changing the channel setting on Welcome.\n
Current Setting: **${setting.userjoin.channel == "" ? "None" : "<#" + setting.userjoin.channel + ">"}**
 
*Please @mention or say the id of the new channel below or type quit to stop.*
`);
                        } else if (collected.first().content == "4" && settingPage == "userjoin") {
                            settingType = "message";
                            cleansettingType = "Message";
                            embed.setDescription(`
You are currently changing the message setting on Welcome.\n
Current Setting: **${setting.userjoin.message == "" ? "None" : setting.userjoin.message}**
 
*Please say the new welcome message below or type quit to stop.*
`);
                        } else if (collected.first().content == "1" && settingPage == "userleave") {
                            settingType = "enabled";
                            cleansettingType = "Enabled";
                            embed.setDescription(`
You are currently changing the Enabled setting on Goodbye.\n
Current Setting: **${setting.userleave.enabled == true ? "Yes" : "No"}**
 
*Please type true to enable or false to disable below or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "userleave") {
                            settingType = "dm";
                            cleansettingType = "DM";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "3" && settingPage == "userleave") {
                            settingType = "channel";
                            cleansettingType = "Channel";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "4" && settingPage == "userleave") {
                            settingType = "message";
                            cleansettingType = "Message";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "1" && settingPage == "autorole") {
                            settingType = "enabled";
                            cleansettingType = "Enabled";
                            embed.setDescription(`
You are currently changing the Enabled setting on Auto Role.\n
Current Setting: **${setting.autorole.enabled == true ? "Yes" : "No"}**
 
*Please type true to enable or false to disable below or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "autorole") {
                            settingType = "role";
                            cleansettingType = "Role";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "1" && settingPage == "userlevel") {
                            settingType = "enabled";
                            cleansettingType = "Enabled";
                            embed.setDescription(`
You are currently changing the Enabled setting on User Level.\n
Current Setting: **${setting.userlevel.enabled == true ? "Yes" : "No"}**
 
*Please type true to enable or false to disable below or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "userlevel") {
                            settingType = "dm";
                            cleansettingType = "DM";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "3" && settingPage == "userlevel") {
                            settingType = "channel";
                            cleansettingType = "Channel";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "4" && settingPage == "userlevel") {
                            settingType = "message";
                            cleansettingType = "Message";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "1" && settingPage == "other") {
                            settingType = "prefix";
                            cleansettingType = "Prefix";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "2" && settingPage == "other") {
                            settingType = "logchannel";
                            cleansettingType = "Log Channel";
                            embed.setDescription(`
 
`);
                        } else if (collected.first().content == "3" && settingPage == "other") {
                            settingType = "adminrole";
                            cleansettingType = "Admin Role";
                            embed.setDescription(`
 
`);
                        }
 
 
                    });
                });
            });
        });
    });
};
 
module.exports.command = {
     enabled: true,
     guildonly: false,
     name: "config",
     aliases: ["c"],
 
     category: "database",
     description: "N/A",
     usage: "config",
 
     permission: "admins"
};
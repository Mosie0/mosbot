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
1: **Welcome Greetings: | ${setting.userjoin.enabled == true ? "Enabled" : "Disabled"} | ${setting.userjoin.enabled == true ? truee : falsee}**`,
`    ${clip} DM: ${setting.userjoin.dm == true ? "Yes" : "No"}
    ${clip} Channel:  ${setting.userjoin.channel == "" ? "None" : "<#" + setting.userjoin.channel + ">"}
    ${clip} Message: ${setting.userjoin.message == "" ? "Default" : setting.userjoin.message}`);

        embed.addField(`
2: **Leave Greetings: | ${setting.userleave.enabled == true ? "Enabled" : "Disabled"} | ${setting.userleave.enabled == true ? truee : falsee}**`,
`    ${clip} DM: ${setting.userleave.dm == true ? "Yes" : "No"}
    ${clip} Channel:  ${setting.userleave.channel == "" ? "None" : "<#" + setting.userleave.channel + ">"}
    ${clip} Message: ${setting.userleave.message == "" ? "Default" : setting.userleave.message}
    `);

        embed.addField(`
3: **Autorole: | ${setting.autorole.enabled == true ? "Enabled" : "Disabled"} | ${setting.autorole.enabled == true ? truee : falsee}**`,
`    ${clip} Role: ${setting.autorole.role == "" ? "None" : "<@&" + setting.autorole.role + ">"}
`);
        embed.addField(`
4: **Leveling Messages: | ${setting.userlevel.enabled == true ? "Enabled" : "Disabled"} | ${setting.userlevel.enabled == true ? truee : falsee}**`,
`    ${clip} DM: ${setting.userlevel.dm == true ? "Yes" : "No"}
    ${clip} Channel: ${setting.userlevel.channel == "" ? "None" : "<#" + setting.userlevel.channel + ">"}
    ${clip} Message: ${setting.userlevel.message == "" ? "Default" : setting.userlevel.message}
    `);

        embed.addField(`
5: **Miscellaneous: **`,
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
            .catch(err => { console.log(err); message.delete(1000); })
            .then(collected => {
                collected.first().delete(1000);
                message.delete(1000);
                embedmessage.delete(1000);

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
                embed.setFooter(``);
                if (settingPage == "") {
                    embed.setTitle(`Canceled`);
                    embed.setDescription(`Your command process has been canceled.`);
                    embed.setThumbnail(null);
                    embed.setFooter(``);
                    message.channel.send(embed).then(m=>m.delete(25000));
                    return;
                }
                message.channel.send(embed).then(embedmessage => {
                    message.channel.awaitMessages(m => ((m.content > 0 && m.content <= 5) || m.content == "quit" || m.content == "clear") && m.author.id == message.author.id, {max: 1, time: 30000, errors: ['time']})
                    .catch(err => { console.log(err); message.delete(1000);})
                    .then(collected => {
                        collected.first().delete(1000);
                        message.delete(1000);
                        embedmessage.delete(1000);

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
You are currently changing the enabled setting on Welcome.\n
Current Setting: **${setting.userjoin.enabled == true ? "Yes" : "No"}**

*Please type true to enable or false to disable or clear to reset below or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "userjoin") {
                            settingType = "dm";
                            cleansettingType = "DM";
                            embed.setDescription(`
You are currently changing the DM setting on Welcome.\n
Current Setting: **${setting.userjoin.dm == true ? "Yes" : "No"}**

*Please type true to enable or false to disable or clear to reset below or type quit to stop.*
`);
                        } else if (collected.first().content == "3" && settingPage == "userjoin") {
                            settingType = "channel";
                            cleansettingType = "Channel";
                            embed.setDescription(`
You are currently changing the channel setting on Welcome.\n
Current Setting: **${setting.userjoin.channel == "" ? "None" : "<#" + setting.userjoin.channel + ">"}**

*Please @mention or say the id of the new channel or clear to reset below or type quit to stop.*
`);
                        } else if (collected.first().content == "4" && settingPage == "userjoin") {
                            settingType = "message";
                            cleansettingType = "Message";
                            embed.setDescription(`
You are currently changing the message setting on Welcome.\n
Current Setting: **${setting.userjoin.message == "" ? "None" : setting.userjoin.message}**

*Please say the new welcome message below or clear to reset below or type quit to stop.*
`);
                        } else if (collected.first().content == "1" && settingPage == "userleave") {
                            settingType = "enabled";
                            cleansettingType = "Enabled";
                            embed.setDescription(`
You are currently changing the enabled setting on Goodbye.\n
Current Setting: **${setting.userleave.enabled == true ? "Yes" : "No"}**

*Please type true to enable or false to disable below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "userleave") {
                            settingType = "dm";
                            cleansettingType = "DM";
                            embed.setDescription(`
You are currently changing the DM setting on Goodbye.\n
Current Setting: **${setting.userleave.dm == true ? "Yes" : "No"}**

*Please type true to enable or false to disable below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "3" && settingPage == "userleave") {
                            settingType = "channel";
                            cleansettingType = "Channel";
                            embed.setDescription(`
You are currently changing the channel setting on Goodbye.\n
Current Setting: **${setting.userleave.channel == "" ? "None" : "<#" + setting.userleave.channel + ">"}**

*Please @mention or say the id of the new channel below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "4" && settingPage == "userleave") {
                            settingType = "message";
                            cleansettingType = "Message";
                            embed.setDescription(`
You are currently changing the message setting on Goodbye.\n
Current Setting: **${setting.userleave.message == "" ? "None" : setting.userleave.message}**

*Please say the new goodbye message below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "1" && settingPage == "autorole") {
                            settingType = "enabled";
                            cleansettingType = "Enabled";
                            embed.setDescription(`
You are currently changing the enabled setting on Auto Role.\n
Current Setting: **${setting.autorole.enabled == true ? "Yes" : "No"}**

*Please type true to enable or false to disable below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "autorole") {
                            settingType = "role";
                            cleansettingType = "Role";
                            embed.setDescription(`
You are currently changing the role setting on Auto Role.\n
Current Setting: **${setting.autorole.role == "" ? "None" : "<@&" + setting.autorole.role + ">"}**

*Please @mention or say the id of the new role below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "1" && settingPage == "userlevel") {
                            settingType = "enabled";
                            cleansettingType = "Enabled";
                            embed.setDescription(`
You are currently changing the enabled setting on User Level.\n
Current Setting: **${setting.userlevel.enabled == true ? "Yes" : "No"}**

*Please type true to enable or false to disable below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "userlevel") {
                            settingType = "dm";
                            cleansettingType = "DM";
                            embed.setDescription(`
You are currently changing the DM setting on User level.\n
Current Setting: **${setting.userlevel.dm == true ? "Yes" : "No"}**

*Please type true to enable or false to disable below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "3" && settingPage == "userlevel") {
                            settingType = "channel";
                            cleansettingType = "Channel";
                            embed.setDescription(`
You are currently changing the channel setting on User level.\n
Current Setting: **${setting.userlevel.channel == "" ? "None" : "<#" + setting.userlevel.channel + ">"}**

*Please @mention or say the id of the new channel below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "4" && settingPage == "userlevel") {
                            settingType = "message";
                            cleansettingType = "Message";
                            embed.setDescription(`
You are currently changing the message setting on User level.\n
Current Setting: **${setting.userlevel.message == "" ? "None" : setting.userlevel.message}**

*Please say the new goodbye message below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "1" && settingPage == "other") {
                            settingType = "prefix";
                            cleansettingType = "Prefix";
                            embed.setDescription(`
You are currently changing the prefix setting on commands.\n
Current Setting: **${setting.prefix == "" ? "r;" : setting.prefix}**

*Please say new prefix below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "2" && settingPage == "other") {
                            settingType = "logchannel";
                            cleansettingType = "Log Channel";
                            embed.setDescription(`
You are currently changing the channel setting on Log Channel.\n
Current Setting: **${setting.logchannel == "" ? "None" : "<#" + setting.logchannel + ">"}**

*Please @mention or say the id of the new channel below or clear to reset or type quit to stop.*
`);
                        } else if (collected.first().content == "3" && settingPage == "other") {
                            settingType = "adminrole";
                            cleansettingType = "Admin Role";
                            embed.setDescription(`
You are currently changing the role setting on Admin role.\n
Current Setting: **${setting.adminrole == "" ? "None" : "<@&" + setting.adminrole + ">"}**

*Please @mention or say the id of the new role below or clear to reset or type quit to stop.*
`);
                        }
                        embed.setTitle(`Editing ${cleansettingPage} Settings: ${cleansettingType}`);
                        embed.setFooter(``);
                        if (settingType == "") {
                            embed.setTitle(`Canceled`);
                            embed.setDescription(`Your command process has been canceled.`);
                            embed.setThumbnail(null);
                            embed.setFooter(``);
                            message.channel.send(embed).then(m => m.delete(25000));
                            return;
                        }
                        message.channel.send(embed).then(embedmessage => {
                            message.channel.awaitMessages(m => m.content !=="" && m.author.id == message.author.id, {max: 1, time: 30000, errors: ['time']})
                            .catch(err => { console.log(err); message.delete(1000); })
                            .then(collected => {
                                collected.first().delete(1000);
                                embedmessage.delete(1000);

                                let embed = new Discord.RichEmbed()
                                    .setColor(0x36393E)
                                    .setDescription(`Error: No description set.`)
                                    .setTitle(`Error: No title set.`)
                                    .setFooter(``)
                                    .setThumbnail(message.guild.iconURL);

                                var settingset = null;
                                if (collected.first().content.toLowerCase() == "clear" && settingType == ("enabled" || "dm")) {
                                    settingset = false
                                    embed.setDescription(`
You have cleared ${cleansettingPage} ${cleansettingType}.\n

*The message interface has ended*
`);
                                } else if (collected.first().content.toLowerCase() == "clear" && settingType !== ("enabled" || "dm")) {
                                    settingset = ""
                                    embed.setDescription(`
You have cleared ${cleansettingPage} ${cleansettingType}.\n

*The message interface has ended*
`);
                                } else if (settingType == ("enabled" || "dm")) {
                                    if (collected.first().content.toLowerCase() == ("f" || "false" || "no")) {
                                        settingset = false;
                                    } else if (collected.first().content.toLowerCase() == ("t" || "true" || "yes")) {
                                        settingset = true;
                                    } else {
                                        settingset = !setting[settingPage][settingType];
                                    }
                                    embed.setDescription(`
You have set the ${cleansettingPage} ${cleansettingType}.\n
Default: **False**
Last Setting: **${setting[settingPage][settingType] == true ? "True" : "False"}**
New Setting: **${settingset == true ? "True" : "False"}**

*The message interface has ended*
`);
                                } else if (settingType == "channel") {
                                    if (collected.first().mentions.channels.first()) {
                                        settingset = collected.first().mentions.channels.first().id;
                                    } else if (message.guild.channels.get(collected.first().content)) {
                                        settingset = collected.first().content;
                                    } else {
                                        return message.channel.send(`Error: Unable to get a valid channel.`).then(m=>m.delete(10000));
                                    }
                                    embed.setDescription(`
You have set the ${cleansettingPage} ${cleansettingType}.\n
Last Setting: **${setting[settingPage][settingType] == "" ? "None" : "<#" + setting[settingPage][settingType] + ">"}**
New Setting: **${settingset == "" ? "None" : "<#" + settingset + ">"}**

*The message interface has ended*
`);
                                } else if (settingType == "message") {
                                    settingset = collected.first().content;
                                    embed.setDescription(`
You have set the ${cleansettingPage} ${cleansettingType}.\n
Last Setting: **${setting[settingPage][settingType] == "" ? "None" : setting[settingPage][settingType]}**
New Setting: **${settingset == "" ? "None" : settingset}**

*The message interface has ended*
`);
                                } else if (settingType == "prefix") {
                                    settingset = collected.first().content;
                                    embed.setDescription(`
You have set the ${cleansettingType}.\n
Default: **r;**
Last Setting: **${setting[settingType] == "" ? "Default" : setting[settingType]}**
New Setting: **${settingset == "" ? "Default" : settingset}**

*The message interface has ended*
`);
                                } else if (settingType == "logchannel") {
                                    if (collected.first().mentions.channels.first()) {
                                        settingset = collected.first().mentions.channels.first().id;
                                    } else if (message.guild.channels.get(collected.first().content)) {
                                        settingset = collected.first().content;
                                    } else {
                                        return message.channel.send(`Error: Unable to get a valid channel.`).then(m => m.delete(10000));
                                    }
                                    embed.setDescription(`
You have set the ${cleansettingType}.\n
Last Setting: **${setting[settingType] == "" ? "None" : "<#" + setting[settingType] + ">"}**
New Setting: **${settingset == "" ? "None" : "<#" + settingset + ">"}**

*The message interface has ended*
`);
                                } else if (settingType == "adminrole") {
                                    if (collected.first().mentions.roles.first()) {
                                        settingset = collected.first().mentions.roles.first().id;
                                    } else if (message.guild.roles.get(collected.first().content)) {
                                        settingset = collected.first().content;
                                    } else {
                                        return message.channel.send(`Error: Unable to get a valid channel.`).then(m => m.delete(10000));
                                    }
                                    embed.setDescription(`
You have set the ${cleansettingType}.\n
Last Setting: **${setting[settingType] == "" ? "None" : "<@&" + setting[settingType] + ">"}**
New Setting: **${settingset == "" ? "None" : "<@&" + settingset + ">"}**

*The message interface has ended*
`);
                                } else {
                                    return message.channel.send(`Error: Something wasn't right when I tried to save to a database`).then(m => m.delete(10000));
                                }

                                embed.setTitle(`Saved ${cleansettingPage} Settings: ${cleansettingType}`);
                                embed.setFooter(`Status: Saving...`);
                                message.channel.send(embed).then(m => {
                                    m.delete(60000);

                                    if (settingPage == "other") {
                                        setting[settingType] = settingset;
                                    } else {
                                        setting[settingPage][settingType] = settingset;
                                    }

                                    setting.save()
                                        .catch(err => {
                                            embed.setFooter(`Status: Save Failed.`);
                                            m.edit(embed);
                                            console.log(err);
                                        })
                                        .then(() => {
                                            setTimeout(function () {
                                                embed.setFooter(`Status: Saved Successfully!`);
                                                m.edit(embed);
                                            }, 5000);
                                        });
                                });
                            });
                        });
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
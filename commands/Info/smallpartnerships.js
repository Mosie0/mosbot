const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
let image1 = ('https://images-ext-2.discordapp.net/external/l27Gxb4vbIwafwJ1QCI3KHb32bui1NvYmV-SQMgmDgA/https/discordapp.com/api/guilds/251055654465175554/icons/f2d1864625cf8d7e5865c9af98f827ca.jpg');
let Jon = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Owner Jon", image1)
.setURL("https://discord.gg/SeWwhDd")
.setTitle("Jonbn123's Discord")
.addField("Discord Invite", "https://discord.gg/SeWwhDd")
.setDescription(`
Jonbn123s Discord
》💥 A Family Friendly Environment
》💥 Level up Roles
》💥 Voice Chats
》💥 Game Nights
》💥 Karaoke
》💥 Q&As 
`)

let image2 = ('https://images-ext-2.discordapp.net/external/D7pWKWW8lg23cZf65sYEMXjT8FtyHLB7fE3QCEITghY/https/discordapp.com/api/guilds/442780996895506442/icons/95b8f6e3929e58d3ddae70ca347ca3d4.jpg')
let Strike = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Owner Strike and Savage")
    .setTitle("Strike And Savages Hangout")
    .addField("Discord Invite", "https://discord.gg/23wfHyG")
    .setDescription💥 (`Welcome To Strike & Savage's Hangout! Be sure to enjoy being in the server! \n 💥 Friendly staff \n 💥 Nice Members \n 💥 A Friendly Community \n 💥 Giveaways \n 💥 Music Channels \n 💥 And Much More!!! `)

    message.channel.send(Jon)
    message.channel.send(Strike)
    message.delete().catch();   
}
module.exports.help = {
    name: "smallpartnerships"
}

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");

//START OF JON PARTNERSHIP MESSAGE
let JonImage = ('https://images-ext-2.discordapp.net/external/l27Gxb4vbIwafwJ1QCI3KHb32bui1NvYmV-SQMgmDgA/https/discordapp.com/api/guilds/251055654465175554/icons/f2d1864625cf8d7e5865c9af98f827ca.jpg');
let Jon = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Owner Jon")
.setURL("https://discord.gg/SeWwhDd")
.setTitle("Jonbn123's Discord")
.addField("Server Invite", "https://discord.gg/SeWwhDd")
.setDescription(`
Jonbn123s Discord
》💥 A Family Friendly Environment
》💥 Level up Roles
》💥 Voice Chats
》💥 Game Nights
》💥 Karaoke
》💥 Q&As 
`)
.setThumbnail(JonImage)
//END OF JON PARTNERSHIP MESSAGE
//START OF STRIKE PARTNERSHIP MESSAGE
let StrikeImage = ('https://images-ext-2.discordapp.net/external/D7pWKWW8lg23cZf65sYEMXjT8FtyHLB7fE3QCEITghY/https/discordapp.com/api/guilds/442780996895506442/icons/95b8f6e3929e58d3ddae70ca347ca3d4.jpg')
let Strike = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Owner Strike and Savage")
    .setTitle("Strike And Savages Hangout")
    .setURL("https://discord.gg/23wfHyG")
    .addField("Server Invite", "https://discord.gg/23wfHyG")
    .setDescription(`💥Welcome To Strike & Savage's Hangout! Be sure to enjoy being in the server! \n 💥 Friendly staff \n 💥 Nice Members \n 💥 A Friendly Community \n 💥 Giveaways \n 💥 Music Channels \n 💥 And Much More!!! `)
    .setThumbnail(StrikeImage)

//END OF STRIKE PARTNERSHIP MESSAGE
//START OF LIT FAM PARTNERSHIP MESSAGE
let LitFamImage = ('https://images-ext-1.discordapp.net/external/iFR7HW3zlD6oP9UOPVM9Htx9S4nhPKGwRyA4Sud1daU/https/discordapp.com/api/guilds/297872830488641536/icons/872f93ac1aaa326c4f7352133bebf21b.jpg')
let LitFam = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Owner Savage and Idicer")
.setTitle("Lit Fam Gaming")
.setURL("http://discord.gg/ynDsWHa")
.setDescription(`
 Name: The Lit Fam Gaming
Owners: Savage and iDicer
Description: We are a collection of wonderful people, great game players & popular personalities - all who have come together to create The Lit Fam.

Features:

🔹 Family
🔹 Self-assignable Roles
🔹 Activity Roles
🔹 Music Bot
🔹 VC Game Nights
🔹 Lit Contests
🔹 Open for Partnerships
🔹 We are a Large Online Family
`)
.addField(`Server Invite`, `http://discord.gg/ynDsWHa`)
.setThumbnail(LitFamImage)
//END OF LIT FAM PARTNERSHIP MESSAGE
//START OF CRYPTIC PARTNERSHIP MESSAGE
let Cryptic = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Owner Cryptic")
.setTitle("Cryptic Discord")
.setURL("https://discord.gg/tApCxyn")
.setDescription(`
 Cryptic's Discord is an online community for players of all games!  My team of Staff and I ensure a family friendly environment for all members!  We provide many ranks and bots for members to interact with to create a more enjoyable experience!  Hope to see you there! 😄

Features

⚡ Family Friendly Community
🗨 Active Chatting Channels
🎙 Frequent Voice Chat Gatherings
🤖 Entertaining Games & Bots
📋 Creator, Gamer, & Member Ranks

`)
.addField(`Server Invite`, `https://discord.gg/tApCxyn`)
.setThumbnail('https://images-ext-1.discordapp.net/external/QF-f2CA6qQdezP5yzcowDDQ6iA4TCjsTJHbDtgNEYz0/https/discordapp.com/api/guilds/421828994724528128/icons/da92a1ef6e2770ec7c4357e700c036b7.jpg')
//END OF CRYPTIC PARTNERSHIP MESSAGE
//START OF EDWARD PARTNERSHIP MESSAGE
let EdwardImage = ('https://cdn.discordapp.com/attachments/465386983255179264/479887770119045122/image.jpg')
let Edward = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("Owner Edward")
.setTitle("Edward and Friends")
.setURL("https://discord.gg/GEffuEu")
.setDescription(`
Join Edward and Friends today For Great Fun!
-    Great Community :family: 
-    Game Nights :video_game:
-    Kind Members :wave: 
-    Best Staff :trophy:
-    Loyal Friends :exclamation: 
-    A Chance to Meet Your Future Best Friends :couple_with_heart: 
-    Active Members :speaking_head: 
-    PG Community :underage: 
-    Welcoming Members :wave:
-     Very little pings :zero: 
             Join Today!
`)
.addField(`Server Invite`, `https://discord.gg/GEffuEu`)
.setThumbnail(EdwardImage)
//END OF EDWARD PARTNERSHIP MESSAGE
//START OF CHIEF PARTNERSHIP MESSAGE
let ChiefImage = ('https://cdn.discordapp.com/avatars/288450828837322764/a_9da0205f2e4a0f15565046ad156ac839.gif')
let Chief = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Owner SUPERCHIEFYT`)
.setTitle("SUPERCHIEFYTS DISCORD")
.setURL("https://discord.gg/ZMYu7KK")
.setDescription(`
●▬▬▬▬▬▬๑۩ SUPERCHIEFYT's Discord ۩๑▬▬▬▬▬▬●

<a:LoveDiscord:448269463402446850> SUPERCHIEFYT's Discord

Features:
⬆  Level up roles 
🛡  Good Staff members
🤖  Fun bots
<a:Cheer:446237254499958795> Good chill hangout for people 

`)
.addField(`Server Invite`, `https://discord.gg/ZMYu7KK`)
.setThumbnail(ChiefImage)
//END OF CHIEF PARTNERSHIP MESSAGE

    message.channel.send(Jon)
    message.channel.send(Strike)
    message.channel.send(LitFam)
    message.channel.send(Cryptic)
    message.channel.send(Edward)
    message.channel.send(Chief)
    message.delete().catch();   
}
module.exports.help = {
    name: "partnerships"
}

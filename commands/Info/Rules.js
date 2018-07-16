const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setImage(`https://cdn.discordapp.com/attachments/422052478075535360/459426338823077898/my_tweet_8.png`)
.addField(`Welcome to ***Gaming HQ!***`, `We are a bunch of people that just love to have fun, we have many fun things that you can enjoy in this discord! With all of us, it creates FUN!`)
.setImage(`https://cdn.discordapp.com/attachments/422052478075535360/459426688212664330/my_tweet_4.png`)
.addField(`
---------------------------Rules---------------------------
GENERAL DISCORD RULES`, `
💠 Treat others with respect
💠 Do not disrespect staff 
💠 No swearing, profanity posts/talk emoticons
💠 EVERYTHING in this discord **must** be family friendly
💠 Bullying is NOT allowed
💠 No talking of politics or  religion
💠 This is a English speaking Discord
💠 Use your common sense
💠 NO spamming
💠 NO raiding
💠 No NSFW
💠 No random tagging
💠 No sharing personal info
💠 NO caps
💠 If you get banned you have to wait to rejoin, don't think you can talk me or the admins to unbanning right away.
💠 Dont tag staff (Moderators+) unless if you need major help with something.
💠 Do not leak chats to people outside of the Discord

💠 ***NEVER ARGUE WITH STAFF***

🔶 **NOTE:** ***ALL STAFF HAVE FINAL SAY ON ANY OF THESE RULES***.

🔶 This discord complies with the Discord Guidelines: https://discordapp.com/guidelines

🔷 By joining this discord you must follow **ALL** of these rules, including staff.

⬜ Thank you so much for reading! And hope you have an **AWESOME** time here!`)
.setThumbnail(`https://images-ext-2.discordapp.net/external/pQEQWDyNfBGw1xqJt8vz1prqzbfjf4OasBlXbnN6s0M/https/cdn.discordapp.com/attachments/444028025932349441/445611500246269972/alert.gif`)
message.channel.send(embed);
}
module.exports.help = {
    name: "Rules"
}

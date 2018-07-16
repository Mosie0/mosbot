const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setImage(`https://cdn.discordapp.com/attachments/422052478075535360/459426338823077898/my_tweet_8.png`)
.addField(`Welcome to ***Gaming HQ!***`, `We are a bunch of people that just love to have fun, we have many fun things that you can enjoy in this discord! With all of us, it creates FUN!`)
.setImage(`
.addField(`
---------------------------Rules---------------------------
GENERAL DISCORD RULES`, `
:diamond_shape_with_a_dot_inside: Treat others with respect
:diamond_shape_with_a_dot_inside: Do not disrespect staff 
:diamond_shape_with_a_dot_inside: No swearing, profanity posts/talk emoticons
:diamond_shape_with_a_dot_inside: EVERYTHING in this discord **must** be family friendly
:diamond_shape_with_a_dot_inside: Bullying is NOT allowed
:diamond_shape_with_a_dot_inside: No talking of politics or  religion
:diamond_shape_with_a_dot_inside: This is a English speaking Discord
:diamond_shape_with_a_dot_inside: Use your common sense
:diamond_shape_with_a_dot_inside: NO spamming
:diamond_shape_with_a_dot_inside: NO raiding
:diamond_shape_with_a_dot_inside: No NSFW
:diamond_shape_with_a_dot_inside: No random tagging
:diamond_shape_with_a_dot_inside: No sharing personal info
:diamond_shape_with_a_dot_inside: If you get banned you have to wait to rejoin, don't think you can talk me or the admins to unbanning right away.
:diamond_shape_with_a_dot_inside: NO caps
:diamond_shape_with_a_dot_inside: Don't tag staff (Moderators+) unless if you need major help with something.
:diamond_shape_with_a_dot_inside: Do not leak chats to people outside of the Discord

:diamond_shape_with_a_dot_inside: ***NEVER ARGUE WITH STAFF***

:large_orange_diamond: **NOTE:** ***ALL STAFF HAVE FINAL SAY ON ANY OF THESE RULES***.

:large_orange_diamond: This discord complies with the Discord Guidelines: https://discordapp.com/guidelines

:large_blue_diamond: By joining this discord you must follow **ALL** of these rules, including staff.

:white_large_square: Thank you so much for reading! And hope you have an **AWESOME** time here!`)
.setThumbnail(`https://images-ext-2.discordapp.net/external/pQEQWDyNfBGw1xqJt8vz1prqzbfjf4OasBlXbnN6s0M/https/cdn.discordapp.com/attachments/444028025932349441/445611500246269972/alert.gif`)
message.channel.send(embed);
}
module.exports.help = {
    name: "Rules"
}

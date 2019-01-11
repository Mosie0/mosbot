// SOON ;)
const Discord = require("discord.js"),
     Money = require("../../models/money.js");
let progressBar = (percent, bar = `▬`, dot = ``, length = 12) => {
     var str = "";
     var i;
     for (i = 0; i < length; i++) { if (i == Math.floor(percent * length)) { str += dot; } else { str += bar; } }
     return str;
};

module.exports.run = async (bot, message, args) => {
     let user = message.guild.users.get(args[0]) || message.mentions.users.first() || message.author;

     message.channel.send('Gathering balance...').then(msg => {
          Money.findOne({ userID: user.id, serverID: message.guild.id }, (err, money) => {
               if (err) console.log(err);
               let balEmbed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setTimestamp()
                    .setFooter("Note: This isn't fully added yet >.>", bot.user.displayAvatarURL);
               if (money) {
                    balEmbed.setDescription(`
**Money:** $${money.money}
**Level:** ${money.level}
**XP:** ${money.xp}

**${money.level}** ${progressBar(money.xp / money.nextlevel)} **${money.level + 1}** [${money.xp}/${money.nextlevel}]`)
               } else {
                    balEmbed.setDescription(`
**Money:** $0
**Level:** 0
**XP:** 0

**0** ${progressBar(-1)} **1** [0/100]`)
               }
               msg.delete(250);
               return message.channel.send(balEmbed);
          });
     });
}

module.exports.help = {
     name: "balance",
     names: "bal",
     perm: "all"
}

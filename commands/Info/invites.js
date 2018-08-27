const Discord = require('discord.js'),
    arraySort = require('array-sort');
   
module.exports.run = async (bot, message, args) => {
  message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
        }).then((invites) => {
        invites = invites.array();
        arraySort(invites, 'uses', {
            reverse: true
        });

        var possibleInvites = [];
        let output = ``;
       // possibleInvites.push([`User  ::  Invites  ::  Code`]);
        invites.forEach(function (invite) {
            if (invite.uses != 0) {
                possibleInvites.push(invite.inviter.username);
            }
        });

        const longest = possibleInvites.reduce((long, str) => Math.max(long, str.length), 0);
        invites.forEach(function (invite){
            if (invite.uses != 0) {
                output += `${invite.inviter.username}${" ".repeat(longest - invite.inviter.username.length)} :: ${invite.uses}\n`;
            }
        });

        const embed = new Discord.RichEmbed()
            .setAuthor(`Invite Leaderboard`)
            .setColor(0x36393E)
            .setDescription(`\`\`\`asciidoc
${output}\`\`\``);

        message.channel.send({embed});
    });
}
module.exports.help = {
    name: "invites"
}

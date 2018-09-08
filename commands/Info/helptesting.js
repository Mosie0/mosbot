const Discord = require('discord.js'),
    backwardsemo =  "⏪",
    forwardsemo = "⏩";


let pages = [.setColor("RANDOM")
.setDescription("helpplplpplp")
, 'Second page', 'Third', 'You can add pages', 'All you need to do is add another item in the array', '**Supports markdown and regular chat description properties**']; 
let page = 1; 

module.exports.run = (bot, message, args) => {
    message.delete(500).catch();
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1]);

    message.channel.send(embed).then(msg => {

        msg.react(backwardsemo).then(r => {
            msg.react(forwardsemo);

            const backwardsFilter = (reaction, user) => reaction.emoji.name === backwardsemo && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === forwardsemo && user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });


            backwards.on('collect', r => {
                if (page === 1) return;
                msg.clearReactions().then(() => {
                    page--;
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Page ${page} of ${pages.length}`);
                    msg.edit(embed);
                    msg.react(backwardsemo).then(() => {
                        msg.react(forwardsemo);
                    });
                });
            });

            forwards.on('collect', r => {
                if (page === pages.length) return;
                msg.clearReactions().then(() => {
                    page++;
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Page ${page} of ${pages.length}`);
                    msg.edit(embed);
                    msg.react(backwardsemo).then(() => {
                        msg.react(forwardsemo);
                    });
                });
            });

            forwards.on('end', () => {
                msg.delete();
            });
        });
    });
};

module.exports.help = {
    name: "help1"
}
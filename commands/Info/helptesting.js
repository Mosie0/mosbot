const Discord = require('discord.js'),
    pageemo = ["🛠", "", "", "", ""],
    backwardsemo=  "⏪",
    forwardsemo= "⏩";


const pages = [
	{
		title: "test1",
		description: "YOYOYOYO THIS IS A TEST",
	},
	
	{
		title: "test2",
		description: "YOYOYOYO THIS IS A **TEST2**",
	},
	
    	{
		title: "test3",
		description: "**YOYOYOYO** THIS IS A TEST3",
	},
]
let page = 1; 

module.exports.run = (bot, message, args) => {
    message.delete(500).catch();
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(pages[page - 1].title)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1].description);

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
                    embed.setColor("RANDOM")
                    embed.setTitle(pages[page - 1].title);
                    embed.setDescription(pages[page - 1].description);
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
                    embed.setColor("RANDOM")
                    embed.setTitle(pages[page - 1].title);
                    embed.setDescription(pages[page - 1].description);
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
const Discord = require('discord.js'),
    pageemo = ["🛠", "🎉", "❔", "🔠", "🎲"];


const pages = [
	{
		title: "test1",
		description: `
YOYOYOYO THIS IS A TEST`,
	},
	
	{
		title: "test2",
		description: `
YOYOYOYO THIS IS A **TEST2**`,
	},
	
    	{
		title: "test3",
		description: `
**YOYOYOYO** THIS IS A TEST3`,
	},
	
	{
		title: "test3",
		description: `
**YOYOYOYO** THIS IS A TEST3`,
	},
	
	{
		title: "test3",
		description: `
**YOYOYOYO** THIS IS A TEST3`,
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
	function reactArrows(arrow) {
		if (arrow === 6) return;
		msg.react(pageemo[arrow]).then(_ => {
		reactArrows(arrow + 1);
		}).catch(
		e => console.error(`Reaction Error: ${e}`)
	);
	}
	function handleReaction(reaction) {
		// console.log(`${reaction.emoji.name} from ${reaction.users.last().username}`);
		reaction.remove(reaction.users.last()).catch(e => {
		    if (e.code === 50013) reaction.message.channel.send("I need the 'Manage Messages' permission in order to work properly!");
		});
		const rid = pageemo.indexOf(reaction.emoji.name);
		embed.setColor("RANDOM")
		embed.setTitle = pageemo[rid].title
		embed.setDescription = pageemo[rid].description
		msg.edit(embed)
	}
	reactArrows(0)
	let collector = msg.createReactionCollector((reaction, user) => {return user.id !== msg.client.user.id && pageemo.includes(reaction.emoji.name);});
        collector.on("collect", (reaction) => {
            handleReaction(reaction);
        }); 
    });
};

module.exports.help = {
    name: "help1"
}

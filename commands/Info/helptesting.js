const Discord = require('discord.js'),
    pageemo = ["🏠", "🛠", "🎉", "❔", "🔠", "🎲", "❌"];


const pages = [
	{
		title: "Help Menu",
		description: `
${pageemo[0]} to return **Home**.

${pageemo[1]} for **Moderation Commands**.

${pageemo[2]} for **Fun Commands**.

${pageemo[3]} for **Information Commands**.

${pageemo[4]} for **Bot Owner Commands**.

${pageemo[5]} for **Credits**.

${pageemo[5]} to exit the menu.`
	},
	{
		title: "Moderation Commands",
		description: `
YOYOYOYO THIS IS A TEST`,
	},
	
	{
		title: "Fun Commands",
		description: `
YOYOYOYO THIS IS A **TEST2**`,
	},
	
    	{
		title: "Information Commands",
		description: `
**YOYOYOYO** THIS IS A TEST3`,
	},
	
	{
		title: "Bot Owner Commands",
		description: `
**YOYOYOYO** THIS IS A TEST4`,
	},
	
	{
		title: "Credits",
		description: `
**YOYOYOYO** THIS IS A TEST5`,
	},
]
let page = 1; 

module.exports.run = (bot, message, args) => {
    message.delete(500).catch();
    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(pages[0].title)
        .setDescription(pages[0].description);

    message.channel.send(embed).then(msg => {
	function reactArrows(arrow) {
		if (arrow === 7) return;
		msg.react(pageemo[arrow]).then(_ => {
			reactArrows(arrow + 1);
		}).catch(e => console.error(`Reaction Error: ${e}`));
	}
	function handleReaction(reaction) {
		// console.log(`${reaction.emoji.name} from ${reaction.users.last().username}`);
		reaction.remove(reaction.users.last()).catch(e => {
		    if (e.code === 50013) reaction.message.channel.send("I need the 'Manage Messages' permission in order to work properly!");
		});
		const rid = pageemo.indexOf(reaction.emoji.name);
		if (rid !== 7 {
			let embed2 = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTitle(pages[rid].title)
			.setDescription(pages[rid].description)

			msg.edit(embed2)
		} else { 
			msg.delete(1000)
		}
	    
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

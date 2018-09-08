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

${pageemo[6]} to **exit** the menu.`
	},
	{
		title: "Moderation Commands",
		description: `
m!addrole: Add a role
m!ban: Ban a member
m!dm: Dm a member
m!kick: Kick a member
m!mute: Mute a member
m!purge: Purge messages
m!removerole: Remove a role
m!report: Report members
m!say: Make the bot say something
m!unban: Unban a member
m!warn: Warn a member
m!poll: Start a poll
m!softban:
m!support: File a support ticket
m!lock: Lock this channel, so no one can chat in it
m!unlock: Allow the role @ everyone to chat in that channel
m!discordupdates: Allows the bot to send a message to the channel #change-log
m!annoucement: Send an embedded message to the #annoucements channel
m!whois: Gives brief data on a member
m!memberlist: Gives the list of members in a certain role`,
	},
	
	{
		title: "Fun Commands",
		description: `***Not Ready Yet***`,
	},
	
    	{
		title: "Information Commands",
		description: `
m!avatar: Shows the avatar of a member
m!botinfo: Gives information about MosBot
m!createinvite: Creates an invite
m!emojify: Emojify a word!
m!emojis: Gives the current animated/still emojis in the current guild
m!topinvites: Gives the current leaderboard of topinvites
m!ping: Current ping of MosBot
m!roles: Current roles in the server
m!serverinfo: Gives information about the current guild
m!serverlookup: Look up any server, and get information about that guild
m!servers: Gives a hastebin link of the current servers MosBot is in
m!stats: Gives stats about MosBot
m!uptime: Gives the current uptime of MosBot
m!id: Find a members user ID`,
	},
	
	{
		title: "Bot Owner Commands",
		description: `**Not ready yet***`,
	},
	
	{
		title: "Credits",
		description: `***Not ready yet***`,
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
		if (rid !== 6) {
			let embed2 = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTitle(pages[rid].title)
			.setDescription(pages[rid].description)

			msg.edit(embed2)
		} else { 
			msg.delete(500)
		}
	    
	}
	reactArrows(0)
	let collector = msg.createReactionCollector((reaction, user) => {return user.id !== msg.client.user.id && pageemo.includes(reaction.emoji.name);}, { time: 30000 });
        collector.on("collect", (reaction) => {
            handleReaction(reaction);
        });
	collector.on('end',() => msg.delete(500));
    });
};

module.exports.help = {
    name: "help"
}

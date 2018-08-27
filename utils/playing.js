const pak = require("../package.json");

// • ⦠ ⧐ ⧽

module.exports = (bot) => {
	//bot.user.setGame(`${config.default.prefix}help`);
	bot.user.setActivity(`magic`, { type: "STREAMING", url: "https://www.twitch.tv/twitch" });

	var status = [
    `V${pak.version}`,
  
		`${bot.guilds.array().length} server${bot.guilds.array().length > 1 ? 's' : ''}`,
		`${bot.channels.array().length} channel${bot.channels.array().length > 1 ? 's' : ''}`,
		`${bot.channels.array().length} channel${bot.channels.array().length > 1 ? 's' : ''}`,
    
		`for lives`,
	];

	var types = [
    `WATCHING`,
		`LISTENING`,
		`LISTENING`,
    `LISTENING`,

		`WATCHING`,
	];

	gameval = 0;
	setInterval(() => {
		if (gameval == status.length) { gameval = 0; }
		bot.user.setActivity(`${status[gameval]}`, { type: types[gameval], url: "https://www.twitch.tv/twitch" });
		gameval++;
	}, 16000);
};

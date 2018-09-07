module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "283311727477784576") return;
    var options = {
        maxAge: 0
    };
    try {
    let guildid = bot.guilds.get(args[0])
    let channelfind = guildid.channels.find(c => c.name === args[1])
    message.channel.send(`Boop`).then(message => {
        channelfind.createInvite(options).then(i => {
            message.edit(`Created a Invite For you  \n https://discord.gg/${i.code}`)
    })
    })
    } catch (e) {
        message.channel.send(`ERROR\n${e}`)
    }
    }
    module.exports.help = {
        name: "guild"
    }
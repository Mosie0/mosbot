const Discord = require('discord.js');
const superagent = require("superagent");
const api = process.env.GIPHY_API_KEY;
// ==========================================================================================================================================
module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    // ==========================================================================================================================================
    let { body } = await superagent
        .get(`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, { json: true });
    // ==========================================================================================================================================
    const brokenembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription(`API is Broke <a:Dots:426956230582599690> Please Contact the Bot Owner.`)
    if (!body) return message.channel.send(brokenembed)
    // ==========================================================================================================================================
    const searchembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription(`:x: You need to search something! <@${message.author.id}>`)
    if (args.length < 1) return message.channel.send(searchembed);
    // ==========================================================================================================================================
    const nothingembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setDescription(`Sorry but nothing for **\`${encodeURIComponent(args.join(" "))}\`**`)
        .setFooter("Command Ran By: " + usernameid, userURL)
    if (!body.data.image_url) return message.channel.send(nothingembed);
    // ==========================================================================================================================================
    const embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading the GIF, Please Wait.....")
    message.channel.send(embed).then(message => {
        embed.setTitle("GIF's Provided By: GIPHY")
        embed.setColor("#000FF")
        embed.setDescription(`Here is your **\`${encodeURIComponent(args.join(" "))}\`** GIF \n Click [here](${body.data.image_url}) for the direct URL`, { json: true })
        embed.setImage(body.data.image_url)
        embed.setFooter("Command Ran By: " + usernameid, userURL)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "gif"
}

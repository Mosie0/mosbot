const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const userURL = message.author.avatarURL;
    const usernameid = message.author.username;
    let replies = [
        "https://media.discordapp.net/attachments/488531171786096640/488531190953803776/hqdefault.png", "https://media.discordapp.net/attachments/488531171786096640/488531232473219082/hqdefault.png", "https://media.discordapp.net/attachments/488531171786096640/488531268628250631/30628982.png", "https://media.discordapp.net/attachments/488531171786096640/488531538967920640/hamster-690108_1920-600x400.png", "https://media.discordapp.net/attachments/488531171786096640/488531560031584256/PetoftheWeek.png", "https://media.discordapp.net/attachments/488531171786096640/488531583217696768/picture-12.png", "https://media.discordapp.net/attachments/488531171786096640/488531603518390295/hampster-or-hamster-25-best-hampster-images-on-pinterest-adorable-animals-funny-stuff-coloring-page-.png", "https://media.discordapp.net/attachments/488531171786096640/488531628633620491/latest.png", "https://media.discordapp.net/attachments/488531171786096640/488531653707431937/Hamster.png", "https://media.discordapp.net/attachments/488531171786096640/488531675827929096/2Q.png", "https://media.discordapp.net/attachments/488531171786096640/488531693326827520/gabwglasses.png", "https://media.discordapp.net/attachments/488531171786096640/488531727111815183/hamster-golf.png", "https://media.discordapp.net/attachments/488531171786096640/488531772972335104/hamster-food.png", "https://media.discordapp.net/attachments/488531171786096640/488531801699123200/h6E1B8A46.png", "https://media.discordapp.net/attachments/488531171786096640/488531822503002112/aa631739fd15218d20799558a0f61fd4.png?width=719&height=540" 
    ]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setDescription("<a:Dots:426956230582599690> Loading a Hamster Photo, Please Wait.,,,,")

    message.channel.send(embed).then(message => {
        embed.setColor("#000FF")
        embed.setDescription("Here's a Photo of a Hamster 😊")
        embed.setImage(replies[result])
        embed.setFooter("Command Ran By: " + usernameid, userURL)
        message.edit(embed)
    })
}
module.exports.help = {
    name: "hamster",
    names: "Hamster"
}
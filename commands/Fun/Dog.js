const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
      let { body } = await superagent.get(`https://dog.ceo/api/breeds/image/random`);
        if (body.status === "success") {
            let embed = new Discord.RichEmbed()
                .setColor("#FF000")
                .setDescription("<a:Dots:426956230582599690> Loading the Photo..")

            message.channel.send(embed).then(message => {
                embed.setColor("RANDOM")
                embed.setDescription("Here's a Photo of a Dog 😊")
                embed.setImage(body.message)
                message.edit(embed)
            })
        } 
}

module.exports.help = {
    name: "dog",
    perm: "all"
}

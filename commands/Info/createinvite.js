const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
    var options = {
        maxAge: 0
    };
    const useruser = "Requested By: " + message.author.username;
    const usermade = message.author;
    const userurl = message.author.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`<a:Dots:426956230582599690> Creating......`)
        .setTimestamp()
    message.channel.send(botembed).then(message => {
    message.channel.createInvite(options).then(i => {
        botembed.setColor("#000FF")
        botembed.setDescription(`Created a Invite For you ${usermade}. \n https://discord.gg/${i.code}`)
        botembed.setFooter(useruser, userurl)
        botembed.setTimestamp()
        message.edit(botembed)
        })
    })
}
module.exports.help = {
    perm: "all",
    name: "invite"
}

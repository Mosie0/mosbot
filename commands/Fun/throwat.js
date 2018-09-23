const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let kUser = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!kUser) return message.channel.send("Who do you want me to throw this at??");
    
    let replies = [`Banana`, `Car`, `Truck`, `Hot Firemen`, `A Building`, 
    `SpongeBob`, 'Patrick', 'Nothing', 'Admins', 'Moderators', 'Staff Members', 
    'Black Hole', 'Scams' , `Love`, `Hate`, `iPhone`, `Brick`, `Bad Bots`, `Chair`, 
    `Lemons`, `Cake`, `Pringles`, `Gummy Bears`, `Bus`, `Train`, `Yourself`, `Knife`, `UR MOM`,
    `SUPERCHIEFYT`, `Mo_sie`,  `Self Bots`, `REEEEEEEEEEEEEEEE`, `Fortnite`, `Defaultio`, `Gaming HQ`, `Roblox`, `Lumber Tycoon 2`
]
    let result = Math.floor((Math.random() * replies.length));
    

    
    let kReason = args.slice(1).join(" ")
    const throwuser = message.mentions.users.first() || message.author;
    
    let embed1 = new Discord.RichEmbed()
        .setColor("000FF")
        .setDescription(`Threw **${replies[result]}** at **${throwuser.username}**`)
        if (!kReason) return message.channel.send(embed1);
    
    
    
    let botmessage = args.slice(1).join(" ");
    let embed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Threw **${botmessage}** at **${throwuser.username}**`)
    message.channel.send(embed);
}
module.exports.help = {
    name: "throw",
    names: "throwat",
    perm: "all"
}

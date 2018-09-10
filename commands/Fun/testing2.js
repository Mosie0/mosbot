const { Canvas } = require("canvas-constructor");
const { get } = require("snekfetch");

module.exports.run = (bot, message, args) => {
    const serverSize = message.guild.memberCount;
    const botCount = message.guild.members.filter(m => m.user.bot).size;
    const humanCount = serverSize - botCount;
    get(message.guild.iconURL).then(guildIcon => {
        const canvas = new Canvas(400, 300)
        .setColor("#2C2F33")
        .addRect(0, 0, 400, 300)
        .setColor("#ffffff")
        .setTextFont('25px Impact')
        //.setTextAlign("center")
        .addText(`Server Member Count`, 10, 25)
        .setTextFont('20px Impact')
        .addText(`Total Count: ${serverSize}`, 10, 125)
        .addText(`Human Count: ${humanCount}`, 10, 150)
        .addText(`Bot Count: ${botCount}`, 10, 175)
        .addRoundImage(guildIcon.body, 350, 20, 128, 128, 78) // 64
        .save();
        
        message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "Account.png"}]});
    });
}

module.exports.help = {
    name: "testing1",
    names: "Testing1"
}

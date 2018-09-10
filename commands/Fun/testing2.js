const { Canvas } = require("canvas-constructor");

module.exports.run = (bot, message, args) => {
    const serverSize = message.guild.memberCount;
    const botCount = message.guild.members.filter(m => m.user.bot).size;
    const humanCount = serverSize - botCount;
    const canvas = new Canvas(400, 200)
    .setColor("#2C2F33")
    .addRect(0, 0, 400, 200)
    .setColor("#ffffff")
    .addText(`Total Count: ${serverSize}`, 100, 50)
    .addText(`Human Count: ${humanCount}`, 100, 100)
    .addText(`Bot Count: ${botCount}`, 100, 150)
    

    message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "Account.png"}]});
}

module.exports.help = {
    name: "testing1",
    names: "Testing1"
}

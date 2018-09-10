const { Canvas } = require("canvas-constructor");

module.exports.run = (bot, message, args) => {
    const serverSize = message.guild.memberCount;
    const botCount = message.guild.members.filter(m => m.user.bot).size;
    const humanCount = serverSize - botCount;
    const canvas = new Canvas(400, 200)
    .setColor("#000000")
    .addRect(0, 0, 400, 200)
    .setColor("#ffffff")
    .addText(`Server Count: ${serverSize}`, 300, 100)
    .addText(`Bot Count: ${botCount}`, 200, 100)
    .addText(`Human Count: ${humanCount}`, 100, 100)

    message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "Account.png"}]});
}

module.exports.help = {
    name: "testing1",
    names: "Testing1"
}

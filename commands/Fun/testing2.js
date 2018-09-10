const { Canvas } = require("canvas-constructor");

module.exports.run = (bot, message, args) => {
    const serverSize = message.guild.memberCount;
    const canvas = new Canvas(400, 200)
    .setColor("#000000")
    .addRect(0, 0, 400, 200)
    .setColor("#ffffff")
    .addText(`Server Members: ${serverSize}`, 200, 100)

    message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "Account.png"}]});
}

module.exports.help = {
    name: "testing1",
    names: "Testing1"
}

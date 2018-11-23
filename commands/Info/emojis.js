const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {
 let guild = msg.guild;
        let fields = []
        let emojis = {
            0: []
        }
        let counter = 0
        guild.emojis.forEach((emoji, index) => {
            if (emojis[counter].join('\n').length > 950) {
                if (++index === guild.emojis.length) {
                    emojis[counter].push(`${emoji}`)
                } else {
                    counter++
                    emojis[counter] = []
                }
            } else {
                emojis[counter].push(`${emoji}`)
            }
        })
        if (emojis[0].join('').length !== 0) {
            Object.keys(emojis).forEach((collection, index) => {
                if (index !== 0) {
                    fields.push({
                        name: 'Continued',
                        value: emojis[index].join(' ')
                    })
                } else {
                    fields.push({
                        name: 'Emojis',
                        value: emojis[index].join(' ')
                    })
                }
            })
        } else {
            fields.push({
                name: 'Emojis',
                value: '**None**'
            })
        }
        msg.channel.send({
            embed: {
                timestamp: new Date(msg.timestamp),
                color: 0xFF000,
                author: {
                    name: guild.name,
                    icon_url: guild.iconURL ? guild.iconURL : `http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png`
                },
                fields: fields
            }
        }).catch(() => { })
}
module.exports.help = {
    perm: "all",
    name: "emojis"
}

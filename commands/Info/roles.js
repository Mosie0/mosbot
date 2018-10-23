module.exports.run = async (bot, msg, args) => {
     let guild = msg.guild;
        let fields = []
        let roles = {
            0: []
        }
        let counter = 0
        guild.roles.forEach((role, index) => {
            if (roles[counter].join('\n').length > 950) {
                if (++index === guild.roles.length) {
                    roles[counter].push(`${role}`)
                } else {
                    counter++
                    roles[counter] = []
                }
            } else {
                roles[counter].push(`${role}`)
            }
        })
        if (roles[0].join('').length !== 0) {
            Object.keys(roles).forEach((collection, index) => {
                if (index !== 0) {
                    fields.push({
                        name: 'More',
                        value: roles[index].join('\n')
                    })
                } else {
                    fields.push({
                        name: `Roles [${guild.roles.size}]`,
                        value: roles[index].join('\n')
                    })
                }
            })
        } else {
            fields.push({
                name: 'Roles',
                value: '**None**'
            })
        }
        msg.channel.send({
            embed: {
                timestamp: new Date(msg.timestamp),
                color: msg.guild.me.hoistRole.color,
                thumbnail: {
                    url: guild.iconURL ? guild.iconURL : `http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png`
                },
                fields: fields
            }
        }).catch(() => { })
}

module.exports.help = {
    perm: "all",
    name: "roles"
}

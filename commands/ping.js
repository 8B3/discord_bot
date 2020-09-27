module.exports = {
    name: 'ping',
    description: 'replies with: "Pong!"',
    execute(message, args, content, error, vanisherid, stormid, testid, bot, color){

        const Discord = require('discord.js'); //discord.js

        if (!message.guild){ //for in DMs
            message.author.send("Pinging...").then(m => {
                let ping = m.createdTimestamp - message.createdTimestamp

                const embed = new Discord.RichEmbed()
                .setTitle('Pong!')
                .addField('Bot Latency', ping + 'ms')
                .addField('API Latency', Math.round(bot.ping) + 'ms')
                .setColor(color)
                .setThumbnail(m.author.avatarURL)

                m.edit(embed)
            })
        }
        else if (message.guild){ // for in servers
            message.channel.send("Pinging...").then(m => {
                let ping = m.createdTimestamp - message.createdTimestamp

                const embed = new Discord.RichEmbed()
                .setTitle('Pong!')
                .addField('Bot Latency', ping + 'ms')
                .addField('API Latency', Math.round(bot.ping) + 'ms')
                .setColor(color)
                .setThumbnail(m.author.avatarURL)

                m.edit(embed)
            })
        }

    }
}
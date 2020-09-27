module.exports = {
    name: 'spam',
    description: 'Spam',
    execute(message, args, content){
 
        const Discord = require('discord.js'); //discord.js

        const mention = message.mentions.users.first() //defining mention
        const embed = new Discord.RichEmbed()
        .setTitle(':zap: **GEI-TARD NATION [1.8-1.15]** :zap:')
        .addField('**What?**', 'Huge events and rewards happening all day!')
        .addField('WHERE?', 'IP: `gaytardnation.sex` [1.8-1.15]')
        .addField('**NEW CUSTOM FEATURES**', ':gift: Daily Key Alls, Giveaways, KOTH, and crazy events. :crossed_swords: Custom Enchants, Cells, Plots, Prestiges, and Bounties. :dollar: Duel Arenas, Auto Miner, Daily Rewards, and Auto Sell.')
        .addField('**GIVEAWAYS**', '*JOIN US NOW*')
        .addField(':camera_with_flash:  TRAILER: https://youtu.be/SHJV8OpFAbI :gem:  GIVEAWAYS: https://discord.gg/50013%7D', mention)
    
        if ((!mention) && (message.guild)) return message.channel.send("Invalid mention").then(message => message.delete(3000)), message.delete(3000) //incorrect syntax
        else if ((!mention) && (!message.guild)) return message.author.send("Invalid mention")
        else if (message.author.id != '508420782100185110') return message.channel.send("You do not have permission to use this command"), message.delete() //only authorized users (me) can use
        else if (!args[2]) return message.channel.send('Please specify a number of messages to send.')

        for (let i = 0; i < args[2]; i++) {
            mention.send(embed)
        }

        message.delete() //delete command
        message.channel.send('Message sent successfully!').then(message => message.delete(3000)) //confirm successful DM
    }
}
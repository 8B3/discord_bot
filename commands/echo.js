module.exports = {
    name: 'echo',
    description: 'sends specified message in target channel',
    execute(message, args, content, Discord, error) {

        const channelMention = message.mentions.channels.first() //defining channel mention
        const userMention = message.mentions.users.first() //defining user mention

        message.channel.startTyping()

                //error
                if (!content[1]) {
                    error.addField('Syntax Error', 'incorrect usage')
                    message.channel.send(error)
                }
        
                //send message current in channel without mention
                else if (!content[1] == channelMention && !content[1] == userMention) {
                    message.channel.send('User>' + message.author + ': ' + message.content.slice(7))
                }
        
                //send message to mentioned channel
                else if (content[1] == channelMention) {
                    channelMention.send('User>' + message.author + ': ' + message.content.slice(28))
                }
        
                //send DM to mentioned user
                else if (content[1] == userMention) {
                    userMention.send('User>' + message.author + ': ' + message.content.slice(28))
                    message.channel.send('Message sent successfully!').then(message => message.delete(3000))
                    message.delete()
                }

        message.channel.stopTyping()
    }
}
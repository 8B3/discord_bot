module.exports = {
    name: 'im good',
    description: 'says stuff',
    execute(message, args, content, error, testid, stormid, vanisherid, color, Discord) {

        if((!content[1] == 'im') || (!content[1] == 'i\'m')) return

        let responses = ['Ok', 'Lol', 'Cool', 'Nice']
        let response = responses[Math.floor(Math.random() * responses.length)]

        message.channel.startTyping()
        if(!message.guild) {
            message.author.send(response)
        }
        else if(message.guild) {
            message.channel.send(response)
        }
        message.channel.stopTyping()

    }
}
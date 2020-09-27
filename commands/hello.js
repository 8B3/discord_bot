module.exports = {
    name: 'hello',
    description: 'says hello',
    execute(message, args, content, Discord) {

        let responses = ['Hello', 'Hello!', 'Hi', 'Hey!', 'Greetings', 'Yo wut up fam', 'HI!', 'Hai', 'Hola', 'How do you do?', 'Hail, ' + message.author.username]
        let response = responses[Math.floor(Math.random() * responses.length)]

        message.channel.startTyping()
        if (!message.guild){ //for in DMs
            message.author.send(response);
        }
        else if (message.guild){ // for in servers
            message.channel.send(response);
        }
        message.channel.stopTyping()
        
    }
}
module.exports = {
    name: 'test',
    description: 'For testing stuff',
    execute(message, args, content, error, testid, stormid, vanisherid){

        error.addField('Invalid Permission', 'This command is useable by bot developers only')
        error.setThumbnail('https://media.tenor.com/images/0b5a587358bde8ff49232d42c1eb0288/tenor.gif')
        if(message.author.id == vanisherid) return message.channel.send(error) //only me

        if (!message.guild){ //for in DMs
            message.author.send("test");
        }
        else if (message.guild){ // for in servers
            message.channel.send("test");
        }

    }
}
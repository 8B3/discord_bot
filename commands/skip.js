module.exports = {
    name: 'skip',
    description: 'skips current song',
    execute(message, args, content){

    var server = servers[message.guild.id];
    if (server.dispatcher) server.dispatcher.end();
    message.channel.send("Skipping current song")
    
    }
}
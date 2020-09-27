module.exports = {
    name: 'stop',
    description: 'stops playing music in the server',
    execute(message, args, content){

        var server = servers[message.guild.id];
        if (message.guild.voiceConnection) {
            for(var i = server.queue.lenth -1; i >=0; i--) {
                server.queue.splice(i,1);
            }
            server.dispatcher.end();
            message.channel.send("Ending the queue and leaving the voice channel")
            console.log("Stopped the queue")
        }
        if (message.guild.connection) message.voiceConnection.disconnect(); //disconnect
    }
}
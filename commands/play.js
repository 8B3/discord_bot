module.exports = {
    name: 'play',
    description: 'adds a song to the queue',
    execute(message, args, content, servers) {

        function play(connection, message) {
            var server = servers[message.guild.id]

            server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter: 'audioonly' })) //download audio

            server.queue.shift(); //shifting queue

            server.dispatcher.on('end', function () {
                if (server.queue[0]) {
                    play(connection, message)
                } else {
                    connection.disconnect();
                }
            })

        }

        if (!content[1]) { //verify second argument
            message.channel.send("Error: No youtube.com link provided")
            return;
        }
        if (!message.member.voiceChannel) { //verify commander is in a voice channel
            message.channel.send("Error: you must be in a voice channel to use this command")
            return;
        }
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];

        server.queue.push(args[1])

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection) {
            play(connection, message)
        })


    }
}
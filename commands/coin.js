module.exports = {
    name: 'coin',
    description: 'flips a coin',
    execute(message, args, content){
        
        var chance = Math.floor(Math.random() * 2) //randomizer

        if (chance == 0) {
            message.channel.send("Heads!")
        }else{
            message.channel.send("Tails!")
        }

    }
}
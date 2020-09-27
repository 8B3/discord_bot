module.exports = {
    name: 'dice',
    description: 'rolls a dice',
    execute(message, args, content){

        var chance = Math.floor(Math.random() * 6) +1 //randomizer

        message.channel.send(chance)
    }
}
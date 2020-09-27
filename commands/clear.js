module.exports = {
    name: 'clear',
    description: 'clears defined amount of messages',
    execute(message, args, content){

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage('Invalid Permission') //Requires permission
        else if (!content[1]) return message.channel.send('Error: Please specify a number of messages to delete. Example: //clear 10') //syntax
        else message.channel.bulkDelete(parseInt(content[1]) + 1) //message deletion
        message.channel.send(content[1] + ' message(s) deleted').then(msg => msg.delete(5000)) //confirm deletion
    }
}
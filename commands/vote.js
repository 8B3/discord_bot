module.exports = {
    name: 'vote',
    description: 'adds reactions for basic vote',
    execute(message, args, content){

        //making variables for emojis
        const thumbUp = '👍'
        const thumbDown = '👎' 
        const yes = '✅'
        const no = '❎'
        const up = '⬆️'
        const down ='⬇️' 

        if ((content[1] == "thumb") || (content[1] == "thumbs")) return message.react(thumbUp).then(message.react(thumbDown)) //thumbvote
        else if ((content[1] == "check") || (!content[1])) return message.react(yes).then(message.react(no)) //check and x vote
        else if ((content[1] ==  "arrow") || (content[1] ==  "arrows")) return message.react(up).then(message.react(down)) //arrow vote
    }
}
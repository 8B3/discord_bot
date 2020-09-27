//Node module references
const Discord = require('discord.js'); //discord.js
const bot = new Discord.Client(); //bot/client
const fs = require('fs');
bot.commands = new Discord.Collection();
const ytdl = require('ytdl-core'); //youtube download core

//Command Handler; command file reference
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

//Variables and other replacements
const token = 'NTgwMDk1MTA5NTcyNDYwNTQ5.XePzLg.xjKMAKY2wkuSStI_OoUfxrrLmCI'; //storm bot
//const token = 'NjAyMzE0OTk3MTQ5ODU5ODQx.Xp4KcQ.JLndazZgJkUxs7esnCHzo7RAYy8'; //test bot
const prefix = "//";
const stormid = '580095109572460549';
const testid = '602314997149859841';
const vanisherid = '508420782100185110';
var blank = '';
var version = '2.2.0';

var servers = {} //music bot queue - servers

//starting bot and setting activity
bot.on('ready', () => {
    console.log('Connected and active - version ' + version);
    bot.user.setActivity('you', {
        type: "WATCHING"
    }).catch(console.error);
    bot.user.setActivity("You can't escape.")
})

//commands
bot.on('message', message => {

    //sending DMs to the bot to me
    if (!message.guild) {
        if (message.author.id == (stormid) || message.author.id == (testid)) return;

        const DMEmbed = new Discord.MessageEmbed()
            .setTitle('New DM from: ' + message.author.username)
            .addField('Message', message.content)
            .setColor('#FFAA00') //gold
            .setThumbnail(message.author.avatarURL)
            .setFooter('<o/')

        bot.fetchUser(vanisherid).then((user) => {
            user.send(DMEmbed);
            console.log('User>' + message.author.username + ': ' + message.content)
        }).catch(console.error);
    };

    //Error message rich embed
    const error = new Discord.RichEmbed()
        .setTitle('Error')
        .setColor(0xFF0000) //red
        .setFooter('Lol')

    //Defining args then defining content as args.toLowerCase
    let args = message.content.substring(blank.length).split(" ");
    var content = args.map(v => v.toLowerCase());

    //No bots allowed to use commands!
    if (message.author.bot) return

    //Commands
    switch (content[0]) {

        //testing
        case prefix + 'test':
            bot.commands.get('test').execute(message, args, content, error, testid, stormid, vanisherid, Discord);
            break

        //spam
        case prefix + 'spam':
            bot.commands.get('spam').execute(message, args, content, error, testid, stormid, vanisherid, Discord);
            break;

        //Sends message in a channel
        case prefix + 'send':
            bot.commands.get('echo').execute(message, args, content, testid, stormid, vanisherid, Discord, error);
            break;
        case prefix + 'echo':
            bot.commands.get('echo').execute(message, args, content, testid, stormid, vanisherid, Discord, error);
            break;

        //"Pong!" (DM, server)
        case prefix + 'ping':
            bot.commands.get('ping').execute(message, args, content, error, testid, stormid, vanisherid, bot, Discord);
            break;
        case prefix + `ping'`:
            bot.commands.get('ping').execute(message, args, content, error, testid, stormid, vanisherid, bot, Discord);
            break;

        //Reacts with simple yes or no reaction votes
        case prefix + 'vote':
            bot.commands.get('vote').execute(message, args, content, error, testid, stormid, vanisherid, Discord);
            break;

        //Flips a coin
        case prefix + 'coin':
            bot.commands.get('coin').execute(message, args, content, error, testid, stormid, vanisherid, Discord);
            break;

        //Rolls a dice
        case prefix + 'dice':
            bot.commands.get('dice').execute(message, args, content, error, testid, stormid, vanisherid, Discord);
            break;

        //Clears defined amount of messages
        case prefix + 'clear':
            bot.commands.get('clear').execute(message, args, content, error, testid, stormid, vanisherid, Discord);
            break;

        //Music commands
        //Joins voice and adds a song to the queue
        case prefix + 'play':
            bot.commands.get('play').execute(message, args, content, servers, error, testid, stormid, vanisherid, gold, Discord);
            break;

        //Skips current song
        case prefix + 'skip':
            bot.commands.get('skip').execute(message, args, content, servers, error, testid, stormid, vanisherid, gold, Discord);
            break;

        //Stops playing music
        case prefix + 'stop':
            bot.commands.get('stop').execute(message, args, content, servers, error, testid, stormid, vanisherid, gold, Discord);
            break;

    }

    //Chatting
    switch (content[0]) {


        //I'm good
        case 'im':
            bot.commands.get('im good').execute(message, args, content, error, testid, stormid, vanisherid, gold, Discord);
            break;
        case `i'm`:
            bot.commands.get('im good').execute(message, args, content, error, testid, stormid, vanisherid, gold, Discord);
            break;

        //"Hello!" (DM, server)
        case 'hello':
            bot.commands.get('hello').execute(message, args, content, error, testid, stormid, vanisherid, gold, Discord);
            break;
        case 'hi':
            bot.commands.get('hello').execute(message, args, content, error, testid, stormid, vanisherid, gold, Discord);
            break;
    }

})

bot.login(token)
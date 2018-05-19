const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```Liste des commandes: \n !pandabot \n !fabriquant \n !pandamusic```");
    }

    if (message.content === prefix + "pandabot"){
        message.channel.sendMessage("```Création du bot le _19/05/2018_ à _17:50_```");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.channel.sendMessage("```Ce bot a été crée par TiPlayer```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "pandamusic play"){
        message.channel.sendMessage("```pandaMusic bientôt disponible !```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "pandamusic stop"){
        message.channel.sendMessage("```pandaMusic bientôt disponible !```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "pandamusic next"){
        message.channel.sendMessage("```pandaMusic bientôt disponible !```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "pandamusic"){
        message.channel.sendMessage("```pandaMusic:\n !pandamusic play\n !pandamusic next\n !pandamusic stop```");
        console.log("Commande effectué");
    }
});

const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("=")

bot.on('ready', function() {
    bot.user.setGame("Panda Bot crée par TiPlayer");
    console.log("Connected");
});

bot.login(TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```Liste des commandes: \n !PandaBot \n !fabriquant \n !music \n Demandez a @TiPlayer_0#1076```");
    }

    if (message.content === prefix + "PandaBot"){
        message.channel.sendMessage("```Ce bot a était crée le 23/05/2018 a 15:30");
        console.log("Commande effectuée");
    }

    if (message.content === prefix + "fabriquant"){
        message.channel.sendMessage("```Ce bot appartien a @TiPlayer_0#1076```");
        console.log("Commande effectuée");
    }
    
    if (message.content === prefix + "play"){
        message.channel.sendMessage("```Music bientôt disponible !```");
        console.log("Commande effectuée");
    }
    
    if (message.content === prefix + "stop"){
        message.channel.sendMessage("```Music bientôt disponible !```");
        console.log("Commande effectuée");
    }
    
    if (message.content === prefix + "next"){
        message.channel.sendMessage("```Music bientôt disponible !```");
        console.log("Commande effectuée");
    }
    
    if (message.content === prefix + "PandaMusic"){
        message.channel.sendMessage("```PandaMusic:\n !play\n !next\n !stop```");
        console.log("Commande effectuée");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("salut");
    }
    
    if (message.content === "Bonjour"){
        message.reply("Bien le bonjour. :)");
        console.log("bonjour");
    }
    
    if (message.content === "slt"){
        message.reply("Bien le bonjour. :)");
        console.log("slt");
    }
    
    if (message.content === "bjr"){
        message.reply("Bien le bonjour. :)");
        console.log("bjr");
    }
    
    if (message.content === "Hey"){
        message.reply("Bien le bonjour. :)");
        console.log("hey");
    }

});

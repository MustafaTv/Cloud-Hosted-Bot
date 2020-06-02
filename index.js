const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready', ()=>{
    console.log("Bot is online");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "legit")){
        message.channel.send("Legit Check Incoming! ");
        message.react('✅');
        message.react('❌');

    }

    if(message.content.startsWith(prefix + "seller")){
            message.channel.send("Seller Review Incoming! ");
            message.react('✅');
            message.react('❌');
    
        
    }

    if(message.content.startsWith(prefix + "buyer")){
        message.channel.send("Buyer Review Incoming! ");
        message.react('✅');
        message.react('❌');

    }


})


Client.login("NzE3NDE3MjQ1MTgwOTUyNjY2.XtaBSg.tMjwNy2lUcUCsBO87nq4dgZjLdk");
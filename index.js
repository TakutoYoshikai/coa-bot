const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var config = loadConfig();
var channels = {
  general: "523320444162408450"
}

function loadConfig() {
  return JSON.parse(fs.readFileSync("config.json"));
}


client.on("ready", function() {
  //client.channels.get(channels.general).send("よろしくね");
});


client.on("message", function(message) {
  if (message.content === "コアちゃん") {
    message.reply("そんな名前の人は知らない///");
  }
});

client.login(config.token);

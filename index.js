const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var config = loadConfig();
var channels = {
  general: "523320444162408450",
  test: "544402388753186818"
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
  if (message.content.indexOf("栗林") != -1) {
    message.reply("いいじゃない!!");
  }
  if (message.content.indexOf("成沢") != -1) {
    message.reply("先生が課題出せって言ってたよ");
  }
});

client.login(config.token);

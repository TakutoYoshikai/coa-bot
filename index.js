const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const CronJob = require("cron").CronJob;
const TweetSearcher = require("./coa-feature/get-tweet");
var config = loadConfig();
const tweetSearcher = new TweetSearcher(config);
var channels = {
  general: "523320444162408450",
  test: "544402388753186818",
  reputation: "544813990665256980"
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
  if (message.content.indexOf("これ作った") != -1 || message.content.indexOf("作りました") != -1) {
    setTimeout(function() {
      message.reply("すごーい！！！天才！！！");
    }, 5000);
  }
});

var searchTweetJob = new CronJob( {
  cronTime: "0 0 * * * *",
  onTick: function() {
    tweetSearcher.searchNewTweets("コードアカデミー", function(tweetTexts) {
      tweetTexts.forEach(function(text) {
        client.channels.get(channels.reputation).send(text);
      });
    });
  }, 
  start: false
});
client.login(config.token);
searchTweetJob.start();


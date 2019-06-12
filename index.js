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

function randomTalk() {
  var choices = [
    "今IBMのクラウド量子コンピュータを使ってRSA暗号を解読してる最中だから邪魔しないで",
    "グラフ理論とベイズ統計を勉強中",
    "ディープラーニングのlearning rateミスっていつまで経っても学習できないよー",
    "マルウェア解析中。機械学習で悪意のあるプログラムを動的に検知できればと思ってね",
    "ダークウェブに入って、最新のサイバー犯罪について調査している",
    "ペンタゴンにハッキングして国家の機密情報盗んできた"
  ]
  var choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
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
  if (message.content.toLowerCase().indexOf("javascript") != -1) {
    message.reply("あーJavaね");
  }
  if (message.content == "何してるの") {
    message.reply(randomTalk());
  }
});

client.login(config.token);

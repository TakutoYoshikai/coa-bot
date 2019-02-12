var twitter = require("twitter");
var fs = require("fs");

function saveCache(cache) {
  fs.writeFileSync("./cache.json", JSON.stringify(cache));
}


module.exports = function(config) {
  var client = new twitter(config.twitter);
  this.searchNewTweets = function(text, callback) {
    var cache = JSON.parse(fs.readFileSync("./cache.json"));
    var checkedTweetId = cache.checkedTweetId;
    client.get("search/tweets", { q: text, count: 10 }, function(error, tweets, response) {
      if (error != null || tweets.statuses.length == 0) {
         callback([]);
        return;
      }
      var tweetTexts = tweets.statuses.filter(function(tweet) {
        return tweet.id > checkedTweetId; 
      }).map(function(tweet) {
        return tweet.text;
      }).filter(function(text) {
        return !text.startsWith("RT");
      });
      checkedTweetId = tweets.statuses[0].id;
      cache.checkedTweetId = checkedTweetId;
      saveCache(cache);
      callback(tweetTexts);
    });
  }
}

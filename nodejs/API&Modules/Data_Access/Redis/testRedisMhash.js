// as the same time setting more value of hash

var redis = require("redis");
var client = redis.createClient();

client.on('error',function(e){
        console.log(e);
    });

console.log("setting the user value");
client.hmset('user','username','alixwang','lastname','alix','firstname','wang');

client.hkeys('user',function(err,replies){
        console.log("Resaults for user :");
        console.log(replies.length + ": replies");
        replies.forEach(function(i,reply){
            console.log(i + ":" + reply);
        });
        client.end();
    });

// use object to setting user value
var redis = require('redis');
var client = redis.createClient();

client.on('error',function(e){
        console.log(e);
    });

console.log("setting value by hash object");

var uservalue = {
        "username":"alixwang",
        "firstname":"wang",
        "lastname":"alix"
    }

client.hmset("user",uservalue);

client.hkeys("user",function(err,replies){
        console.log("Resaults of Replies");
        console.log(replies.length + "replies");
        replies.forEach(function(i,reply){
            console.log(i+":"+reply);
        });
        client.end();
    });

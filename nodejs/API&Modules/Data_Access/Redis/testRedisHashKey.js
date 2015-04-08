var redis = require('redis'),
    client = redis.createClient();

client.on("error",function(e){
        console.log(e);
    });

console.log("Setting user hash");

client.hset('user','username','alixwang');
client.hset('user','firstname','wang');
client.hset('user','lastname','alix');

client.hkeys("user",function(err,replies){
    console.log("Resaults for users");
    console.log(replies.length + " replies");
    replies.forEach(function(reply,i){
        console.log(i + ":"+ reply);
    });
    client.end();
    });


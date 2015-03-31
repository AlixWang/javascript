// user list in redis

var redis = require('redis'),
    client = redis.createClient();

client.on('error',function(e){
        console.log(e);
    });

client.lpush('username','alixwang1');
client.lpush('username','alixwang2');
client.lpush('username','alixwang3');
client.lpush('username','alixwang4');
client.lpush('username','alixwang5');

client.rpop('username',function(err,username){
        if(!err){
            console.log('Process : '+username);
        }
        client.end();
    })



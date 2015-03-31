// user the redis set(集合) 
var redis = require('redis'),
    client = redis.createClient();

client.on('error',function(e){
        console.log(e);
    });

client.sadd('myname','alixwang0');
client.sadd('myname','alixwang1');
client.sadd('myname','alixwang2');
client.sadd('myname','alixwang3');
client.sadd('myname','alixwang4');

client.smembers('myname',function(err,members){
        if(!err){
        console.log(members);
        client.end();
        }
    });

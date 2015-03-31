var redis = require('redis');
var client = redis.createClient();

client.on('error',function(e){
    console.log('Error'+e);
});

console.log("Setting Key1");
client.set("key1","My String",redis.print);
console.log('Getting Key1');
client.get("key1",function(e,reply){
    console.log(reply);
    client.end();
});

// use redis subscribe and publish

var redis = require('redis'),
    talkActiveClient = redis.createClient(),
    pensiveClient  = redis.createClient();

pensiveClient.on('subscribe',function(channel,count){
        talkActiveClient.publish(channel,'Welcome to'+channel);
        talkActiveClient.publish(channel,'You subscribe to '+count+'channels');
    });

pensiveClient.on('unsubcribe',function(channel,count){
        if(count === 0){
            talkActiveClient.end();
            pensiveClient.end();
        }
    });

pensiveClient.on('message',function(channel,message){
        console.log(channel+":"+message);
    });

pensiveClient.on('ready',function(){
        pensiveClient.subscribe('quiet channel','peacefull channel','noisy channel');
        setTimeout(function(){
            pensiveClient.unsubscribe('quiet channel','peacefull channel','noisy channel');
        },1000);
    });


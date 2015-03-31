var redis = require('redis'),
    client = redis.createClient();

client.on('error',function(e){
        console.log(e);
    });

client.zadd('age',26,'sdfgdsf');
client.zadd('age',65,'jrtty');
client.zadd('age',78,'3ew4tr');
client.zadd('age',54,'tyhrtt');
client.zadd('age',12,'afdsg');
client.zadd('age',43,'mn');
client.zadd('age',45,'dsfgsd');
client.zadd('age',56,'546dfg');
client.zadd('age',76,'mndfg');
client.zadd('age',45,'nndf');
client.zadd('age',243,'dfhfg');
client.zadd('age',23,'sw34et');
client.zadd('age',24,'sbvcb');
client.zadd('age',324,'weter');

client.zcard('age',function(err,length){
        if(!err){
            var ageCount = length;
            var membersPerTeam = Math.ceil(ageCount/3);
            client.zrange('age',membersPerTeam*0,membersPerTeam*1-1,function(err,values){
                console.log('Young Team :'+values);
            });

            client.zrange('age',membersPerTeam*1,membersPerTeam*2-1,function(err,values){
                console.log('Young Team :'+values);
            });

            client.zrange('age',membersPerTeam*2,ageCount,function(err,values){
                console.log('Young Team :'+values);
                client.end();
            });

        }
    });



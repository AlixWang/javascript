 /*
    this file teach us use cluster modules create much process by your computer cpu

 */

 var cluster = require('cluster');
 var http = require('http');
 var numCPUs = require('os').cpus().length;

 var rssWarn = (12  );
 var heapWarn = (10  );

 if(cluster.isMaster){
     //create working process
     for(var i=0;i<numCPUs;i++){
         console.log(i);    //view about how many cpus in your computer
         cluster.fork();
     }

     cluster.on('message',function(m){
         if(m.memory){
             if(m.memory.rss > rssWarn){
                 console.log('worker'+m.process+'using too much memory.');
             }
         }
        
     })
 }else{
     //working process create http server
     http.createServer(function(req,res){
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write('<p>this is test file</p>');
         res.end();
     }).listen(8000);

     //ever second print the status
     setInterval(function report(){
         process.send({memory:process.memoryUsage(),process:process.pid});
     },1000);

 }

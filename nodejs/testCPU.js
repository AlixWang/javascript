 /*
    this file teach us use cluster modules create much process by your computer cpu

 */

 var cluster = require('cluster');
 var http = require('http');
 var numCPUs = require('os').cpus().length;

 if(cluster.isMaster){
     //create working process
     for(var i=0;i<numCPUs;i++){
         console.log(i);    //view about how many cpus in your computer
         cluster.fork();
     }

     cluster.on('death',function(worker){
         console.log('worker'+worker.pid+'died');
         cluster.fork();    //when the master process is die will create new process
     })
 }else{
     //working process create http server
     http.createServer(function(req,res){
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write('<p>this is test file</p>');
         res.end();
     }).listen(8000);
 }

#!/usr/local/bin/node
var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain","charset":"utf-8" ,"Content-Length":"20"});
    response.end('<p>hello my world<p>');
}).listen(8080);
console.log("server setup");


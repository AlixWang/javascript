var http=require("http");
http.createServer(function (req,rsp){
    rsp.writeHead(200,{"Content-Type":"text/html"});
    rsp.write("<p>this is text node app</p>");
    rsp.end();
}).listen(8080);
console.log("server is set up");

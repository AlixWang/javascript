var http=require("http");
http.createServer(function (req,rsp){
    rsp.writeHead(200,{"Content-Type":"text/html"});
    rsp.write("<p>this is text node app</p>");
    rsp.end();
}).listen(8080);
<<<<<<< HEAD
console.log("server is set up");
=======
console.log("server setup");
>>>>>>> fae25085c1565b0259e00bba960192dd07841a52

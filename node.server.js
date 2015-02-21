/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-02-19 22:01:16
 * @version $Id$
 * server.js
 */

var http=require("http");
 http.createServer(function (req,res){
 	res.writeHead(200,{"Content-type":"text/html"});
 	res.end("<h1>this is node server</h1>");
 }).listen(80);

 console.log("server set up");
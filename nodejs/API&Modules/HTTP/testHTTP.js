/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-21 17:36:08
 * @version $Id$
 */
 var http = require('http');
 var server = http.createServer();
 var callback=function(req,res){
 	res.writeHead(200,{'content-type':'text/html'});
 	res.write("<p>this is test ha ha</p>");
 	res.end();
 } 

 //here we must use 'request' to listen server
 server.on('request',callback);
 server.listen(8000);



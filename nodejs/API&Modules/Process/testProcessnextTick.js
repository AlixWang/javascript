/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-28 22:34:23
 * @version $Id$
 */

 var http = require('http');
 var server = http.createServer();
 var callback = function(req,res){
 	res.writeHead(200,{});
 	res.end("response callback");
 	console.log("hi im here");
 	process.nextTick(function(){console.log('tick in here');});
 }
 server.on('request',callback);
 server.listen(8000);
 console.log('sdfs');

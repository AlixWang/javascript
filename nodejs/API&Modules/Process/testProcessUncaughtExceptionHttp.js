/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 16:58:54
 * @version $Id$
 */
 var http = require('http');
 var server = http.createServer(function(req,res){
 	res.writeHead(200,{});
 	res.end('response');
 	badLoggingCall('sent response');
 	console.log('response');
 });
 process.on('uncaughtException',function(e){
 	console.log(e);
 })
 server.listen(8000);

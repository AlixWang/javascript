/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-21 20:31:44
 * @version $Id$
 */
 /*
	though we can use http client to connect our server but our server can deal with this stream
 */
 var http = require('http');
 var opts = {
 	host:'localhost',
 	port:8000,
 	path:'/',
 	method:'POST'
 }

 var req = http.request(opts,function(res){
 	res.setEncoding('utf8');
 	res.on('data',function(data){
 		console.log('contents: '+data);
 	});
 });
 
 req.write('this is my write contents');
 req.end();
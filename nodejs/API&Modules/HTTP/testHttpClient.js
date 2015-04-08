/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-21 20:00:21
 * @version $Id$
 */

 var http = require('http'),
 	 opts = {
 	 	host:'localhost',
 	 	port:8000,
 	 	path:'/',
 	 	method:'GET'
 	 };
 var req = http.request(opts,function(res){
 	res.setEncoding('utf8');	//set character to utf8
 	res.on('data',function(data){

 		console.log(data);
 	})
 });

 req.end();
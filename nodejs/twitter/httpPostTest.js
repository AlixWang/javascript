/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-03-17 22:21:25
 * @version $Id$
 */

// test post API
var http = require("http"),
	assert = require("assert");

var opts={
	host:'localhost',
	port:8000,
	parth:'/send',
	method:'post',
	headers:{'Content-Type':'application/x-www-form-urlencoded'}
}

var req=http.request(opts,function(res){
	res.setEncoding('utf8');
	var data='';
	res.on(data,function(d){
		data+=d;
	});
	res.on('end',function(){
		assert.strictEqual(data,{"status":"OK","message":"tweet raceived"});
	});
});
req.write('tweet=test');
req.end();

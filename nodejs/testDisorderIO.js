/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-03-19 01:01:25
 * @version $Id$
 */
var fs=require('fs');

//when the foo.txt size big than foo1.txt the foo1.txt will print in screen 
fs.readFile('foo.txt','utf8',function(err,data){
	console.log(data);
});
fs.readFile('foo1.txt','utf8',function(err,data){
	console.log(data);
});

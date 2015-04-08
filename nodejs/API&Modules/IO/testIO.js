/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-21 23:18:39
 * @version $Id$
 */
 var fs = require('fs');
 var stream = fs.readFile('foo1.txt','utf8',function(erro,data){
 	console.log(data);

 	//delete the file inner in the callback function can avoid delete the file lead the fs can't find 
 	//foo1.txt file 
 	fs.unlink('foo1.txt');
 });

 


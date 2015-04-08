/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-29 17:13:48
 * @version $Id$
 */

 // child_process.spawn()
 // spawn() usually to build some moduels for main process 

 var cp = require('child_process');

 var cat = cp.spawn('cat');

 cat.stdout.on('data',function(data){
 	console.log(data.toString());
 });
 cat.on('exit',function(){
 	console.log('kthxbai');
 });

 cat.stdin.write('meow');
 cat.stdin.end();


/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-26 22:40:49
 * @version $Id$
 */
 //catch node process sign
 process.stdin.resume();

 process.on('SIGINT',function(){
 	console.log('Got SIGINT. press Control-D to exit.');
 });

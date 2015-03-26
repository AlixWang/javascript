/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 16:30:40
 * @version $Id$
 */
 process.on('uncaughtException',function(err){
 	console.log('Caught exception: '+err);
 });

 setTimeout(function(){
 	console.log('This will still running');
 },1000);
 //there have an undefined function
 nonexistentFunc();

 console.log('this will not running');

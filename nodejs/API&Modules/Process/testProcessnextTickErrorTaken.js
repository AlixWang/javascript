/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-28 23:25:10
 * @version $Id$
 */

 //test when the other code error the process.nextTick
 process.on('uncaughtException',function(e){
 	console.log(e);
 });
 process.nextTick(function(){
 	console.log('tick');
 });
 process.nextTick(function(){
 	iAmMistake();
 	console.log(tock);
 });
 process.nextTick(function(){
 	console.log('tick tock');
 });
 console.log('end');

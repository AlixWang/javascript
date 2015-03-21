/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-21 16:06:54
 * @version $Id$
 */
 
 //require we need modles
 var util = require('util'),
 	 EventEmitter = require('events').EventEmitter;
 //init our test function when we instantiation a server this function will running once time
 var server = function(){
 	console.log('init');
 }

 //use util.inherits function to make server class can use EventEmitter's features 
 util.inherits(server,EventEmitter);
 
 //instantiation server class
 var s = new server();
 
 var ss = new server();

 //add EventEmitter's function to server
 s.on('abc',function(){
 	console.log('abc');
 });

 ss.on('ABC',function(){
 	console.log('ABC');
 });

 //emit the s 
 s.emit('abc');
 ss.emit('ABC');
 

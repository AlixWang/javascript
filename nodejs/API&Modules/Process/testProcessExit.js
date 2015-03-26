/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 16:26:56
 * @version $Id$
 */
 process.on('exit',function(){
 	setTimeout(function(){
 		console.log('This will not running');
 	},1000);
 	console.log('bye');
 });


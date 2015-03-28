/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-26 23:30:09
 * @version $Id$
 */
 //initialzation the process and prepare the Burrfer to store the data from dtdin
 process.stdin.resume();

 process.stdin.setEncoding('utf8');
 process.stdin.on('data',function(data){
 	console.log(data);
 });

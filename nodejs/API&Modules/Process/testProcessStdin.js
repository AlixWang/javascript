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
 	//console.log(data);

 	/*
	   you also can use this code to display the stdin contents
 	*/
 	process.stdout.write('date : '+data);
 });

 process.stdin.on('end',function(){
 	process.stdout.write('end');
 });

 /*
  * we have perfect ways to connect tow data stream from pipe through the second method	
  * 
 */

 //second method
 /*process.stdin.resume();
 process.stdin.pipe(process.stdout);*/

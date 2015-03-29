/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-29 16:30:07
 * @version $Id$
 */

 //child_process.exec()

 // exec() method usually to execute some OS program and return the resault 

 var cp = require('child_process');

 /*
	the exec() second argument is 
		opt = {
			encoding:'utf8',	        // I/O stream encoding type
			timeout:0,			        // process running time
			maxBuffer:200*1024,			// Buffer size that stdout & stdin allow size		
			killSignal:'SIGTERM',		// when time or Buffer size more than the initialization value , use this signal to end the process	 
			setsid:false,				// should or should't create the new seesion for child process
			cwd:null,					// initialization the worker directory for child process
			env:null					// process env variable
		} 
 */
 cp.exec('ls -l ../',{maxBuffer:1024},function(e,stdout,stderr){
 	if(e){
 		console.log(e);
 	}else{
 		console.log(stdout);
 		console.log(stderr);
 	}
 });
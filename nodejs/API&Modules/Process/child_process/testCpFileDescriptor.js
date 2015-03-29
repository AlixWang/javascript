/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-29 20:01:49
 * @version $Id$
 */

 //file descriptors
 var cp = require('child_process');

 var child = cp.spawn('cat',[],{stdio:[0,1,2]});

 //warning 
 /*
	when the child process inheritance they father process stdin,stdout&stderr data
	stream then themself those method will disappear that's is to say the child_pr-
	osess lost the stdin,stdout,stderr
 */

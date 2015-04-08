/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-26 22:48:31
 * @version $Id$
 */
 //interaction to the node process
 /*
  * process.version 	//this will return the node version
  *	process.installPrefix	//this will return the node install directory
  * process.platform	//this will return the platform of opration systeam
  * process.uptime	//this will return this node process running time till now
  *
 */

 console.log(process.version);
 console.log(process.installPrefix);
 console.log(process.env);
 console.log(process.platform);
 console.log(process.uptime());
 console.log(process.cwd());
 console.log(process.execPath);
 console.log(process.memoryUsage());	//print the platform memory use situation

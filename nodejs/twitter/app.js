/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-03-14 23:35:27
 * @version $Id$
 */
 var express = require('express'),
 	 //don't use express.createServer()
 	 app = express();
 
 	app.get('/',function(req,res){
 		ress.send("welcome to node twitter");
 	});
 //listen port
 app.listen(8000);

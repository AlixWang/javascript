/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-03-14 23:35:27
 * @version $Id$
 */
 var express = require('express');
 	 //don't use express.createServer()
 var app = express();
 
 app.get('/',function(req,res){
 		res.send("welcome to node twitter");
 	});
 //listen port
 app.listen(8000);

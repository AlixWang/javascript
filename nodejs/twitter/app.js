/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-03-14 23:35:27
 * @version $Id$
 */
 var express = require('express');
<<<<<<< HEAD
 	 //don't use express.createServer()
 var app = express();
 
 app.get('/',function(req,res){
 		res.send("welcome to node twitter");
=======

 var tweets=[];
 var bodyParser=require('body-parser');
 //don't use express.createServer()
 var app = express();


 	app.get('/',function(req,res){
 		var title='Chirpie',
 			header='Welcome to Chirpie';
 		res.render('index',{
 			locals:{
 				'title':title,
 				'header':header,
 				'tweets':tweets,
 				stylesheets:['/public/style.css']
 			}
 		});
>>>>>>> 828964b9eb55c9630a326ef8544bca719cb6cdd3
 	});

 	app.post('/send',bodyParser.urlencoded({ extended: false }),function(req,res){
 		if (req.body&&req.body.tweets){
 			tweets.push(req.body.tweet);
 			res.send({status:'OK',message:'tweet received'});
 		}else{
 			res.send({status:'not ok',message:'tweet not received'});
 		};
 	});

 	app.get('/tweets',function(req,res){
 		res.send(tweets);
 	});


 //listen port
 app.listen(8000);

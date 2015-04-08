/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-21 21:01:57
 * @version $Id$
 */
 var query = require('querystring');
 var mystring = 'name=wangjun&age=12';
 console.log(query.parse(mystring));

 //the value in the json data must be the sting,date,boolean if not the sthing value will null
 var myJson = {name:'AlixWang',age:15,email:'wangjun2012al@gmail.com',func:function(){console.log("hello")}};
 console.log(query.encode(myJson));

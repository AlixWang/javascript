/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 12:16:53
 * @version $Id$
 */

 //DNS have tow function resolve()&reverse()

 //resolve() have three arguments (domain_name,record_type,function)
 var dns = require('dns');
 dns.resolve('www.baidu.com','A',function(e,r){
 	console.log(r);
 });


 //the resolve6 function can parsing domain's ipv6 address #the resolve4() also have#
 dns.resolve6('www.google.com',function(e,r){
 	console.log(r);
 });

 //use tht resolveMX()
 dns.resolveMx('www.baidu.com',function(e,r){
 	console.log(r);
 });



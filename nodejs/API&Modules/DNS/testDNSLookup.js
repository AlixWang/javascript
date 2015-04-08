/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 12:39:06
 * @version $Id$
 */
 
 //dns lookup()
 var dns = require('dns');

 //dns.lookup() function have 4 arguments [domain_name,ip_type,callback_function]
 dns.lookup('www.baidu.com',4,function(e,r){
 	if (e) {
 		console.log(e);
 	}else{
 		console.log(r);
 	};
 });

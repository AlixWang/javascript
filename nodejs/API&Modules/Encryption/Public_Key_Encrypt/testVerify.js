/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 15:25:16
 * @version $Id$
 */
 //verify()

 //include some modles
 var crypto = require('crypto');
 var fs = require('fs');
 
 //prapare some variabe
 var privatePem = fs.readFileSync('key.pem');
 var publicPem = fs.readFileSync('cert.pem');
 var publicKey = publicPem.toString('ascii');
 var privateKey = privatePem.toString('ascii');

 //give some sign date
 var data = "alixwang";

 //sign data 
 var sign = crypto.createSign('RSA-SHA256');
 	 sign.update(data);

 var sig = sign.sign(privateKey,'hex');
 
 //verify data
 var verify = crypto.createVerify('RSA-SHA256');
 	 verify.update(data);

 //print the resault
 	 console.log(verify.verify(publicKey,sig,'hex'));



/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 13:39:27
 * @version $Id$
 */
 var crypto = require('crypto');
 var fs = require('fs');

 var pem = fs.readFileSync('key.pem');
 var key = pem.toString('ascii');

 //tow arguments first is openssl algorithm last is public key
 var cipher = crypto.createCipher('blowfish',key);
 //the data is too short so can't print anything
 console.log(cipher.update(new Buffer(4),'binary','hex'));

 console.log(cipher.update(new Buffer(4),'binary','hex'));
 console.log(cipher.update(new Buffer(4),'binary','hex'));
 //direct use the final method to print the hex string
 console.log(cipher.final('hex'));
 

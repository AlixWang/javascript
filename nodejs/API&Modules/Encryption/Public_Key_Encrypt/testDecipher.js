/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 14:04:51
 * @version $Id$
 */
 //Decipher
 
 var crypto = require('crypto');
 var fs = require('fs');

 var pem = fs.readFileSync('key.pem');
 var key = pem.toString('ascii');

 var plaintext = new Buffer('wangjun2012al@gmail.com');
 var encypted = "";
 var cipher = crypto.createCipher('blowfish',key);

 encypted += cipher.update(plaintext,'binary','hex');
 encypted += cipher.final('hex');

 var decrypted = "";
 var decipher = crypto.createDecipher('blowfish',key);

 decrypted += decipher.update(encypted,'hex','binary');
 decrypted += decipher.final('binary');

 var output = new Buffer(decrypted);
 
 console.log(output);
 console.log(plaintext);

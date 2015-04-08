/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 15:21:13
 * @version $Id$
 */
//sign

var crypto = require('crypto');
var sign = crypto.createSign('RSA-SHA256');

var fs = require('fs');
var pem = fs.readFileSync('key.pem');
var key = pem.toString('ascii');

sign.update('ALixWang');
sig = sign.sign(key,'hex');

console.log(sig);

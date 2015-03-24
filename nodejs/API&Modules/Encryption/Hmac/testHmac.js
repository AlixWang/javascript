/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 13:02:10
 * @version $Id$
 */
// HMAC
// except use the key , hmac like the md5
var crypto = require('crypto');
var fs = require('fs');

var pem = fs.readFileSync('key.pem');
var key = pem.toString('ascii');

var hmac = crypto.createHmac('sha1',key);

hmac.update('AlixWang');
console.log(hmac.digest('hex'));

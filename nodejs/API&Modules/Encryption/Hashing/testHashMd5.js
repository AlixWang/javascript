/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-24 12:45:46
 * @version $Id$
 */

 // encryption()
 var crypto = require('crypto');
 // use crypto.createHash() to create a md5 instance
 var md5 = crypto.createHash('md5');
 md5.update('AlixWang');

 console.log(md5.digest('hex'));
/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-29 22:21:07
 * @version $Id$
 */

 //assert()
 /*
	assert.equal()
	assert.notEqual()
	
	assert.ok()

	assert.deepequal()
	assert.notDeepEqual()

	assert.throws()
	assert.doesNotThrow()


 */

 var assert = require('assert');

 assert.equal(1,true,'Truthy');
 assert.notEqual(1,true,'Truthy');

 assert.throws(
 		function(){
 			throw new Error('Seven Fingers . Ten is too mainstrean.');
 		}
 	);

 assert.doesNotThrow(
 		function () {
 			throw new Error("I lived in the ocean way before Nemo");
 		}
 	);


 
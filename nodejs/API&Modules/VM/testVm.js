/**
 * 
 * @authors Alix Wang (wangjun2012al@gmail.com)
 * @date    2015-03-29 23:26:37
 * @version $Id$
 */

 //vm moudles
 
 var vm = require('vm');

 var resault = vm.runInThisContext('1+1');
 console.log(resault);

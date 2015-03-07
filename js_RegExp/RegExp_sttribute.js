/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-02-19 20:18:16
 * @version $Id$
 */
var parttern_str=/cat/igm;
var parttern_fun=new RegExp("cat","igm");
console.log(parttern_str.ignoreCase);
console.log(parttern_str.global);
console.log(parttern_str.source);
console.log(parttern_str.multiline);
console.log(parttern_str.lastIndex);
console.log(parttern_fun.ignoreCase);
console.log(parttern_fun.global);
console.log(parttern_fun.source);
console.log(parttern_fun.multiline);
console.log(parttern_fun.lastIndex);

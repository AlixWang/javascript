/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-02-22 18:23:03
 * @version $Id$
 */

 //global&math Object

 var  URL="alixwang.info/index.html?id=1%";
 
 //对部分URL段字符进行编码
 console.log(encodeURI(URL));
 //对整个URL段字符进行编码
 console.log(encodeURIComponent(URL));


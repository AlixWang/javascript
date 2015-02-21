/**
 * 搜索
 * @authors Wang Jun (wangjun.org)
 * @date    2015-02-19 21:03:10
 * @version $Id$
 *
 * RegExp test()
 */

 var text="this is test";
 var pattern=/this.*/ig;
 if(pattern.test(text)){
 	
 	console.log("this is very good");
 	// toString() 和 toLocaleString() 都返回正则表达式
 	console.log(pattern.toString());
 	console.log(pattern.toLocaleString());

 }

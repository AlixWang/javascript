/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-02-19 21:49:04
 * @version $Id$
 */

 var text="this is a short summer";
 var pattern=/(.short)/gi;

 if (pattern.test(text)) {
 	console.log(RegExp.input);
 	console.log(RegExp.leftContext);
 	console.log(RegExp.rightContext);
 	console.log(RegExp.lastMatch);
 	console.log(RegExp.lastParen);
 	console.log(RegExp.multiline);
 };

 if (pattern.test(text)) {
 	console.log(RegExp["$_"]);
 	console.log(RegExp["$&"]);
 	console.log(RegExp["$+"]);
 	console.log(RegExp["$`"]);
 	console.log(RegExp["$*"]);
 	console.log(RegExp["$'"]);
 };

 //RegExp 构造函数属性对匹配组的捕获
 var text1="hello my name is AlixWang";
 var pattern1=/^(hello).*(name).*(AlixWang)$/gi;
 pattern1.exec(text1);
 console.log(RegExp.input); //取得待匹配项
 console.log(RegExp["$1"]);	//捕获第一个分组
 console.log(RegExp["$2"]);	//捕获第二个分组
 console.log(RegExp["$3"]);	//捕获第三个分组



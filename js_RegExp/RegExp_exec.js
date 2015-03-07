/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-02-19 20:18:16
 * @version $Id$
 *
 * Regexp exec()
 *
 */
 var text="mom and dad and baby";
 var pattern=/mom( and dad (and baby)?)?/ig;

 var matches=pattern.exec(text);
 console.log(matches.index);
 console.log(matches.input);
 console.log(matches[0]);
 console.log(matches[1]);
 console.log(matches[2]);

 //exec() 设置g属性跟不设置g区别
 var text1="this bhis shis hhis phis";
 var pattern1=/.his/;
 //第一次调用
 var matches1=pattern1.exec(text1);
 console.log(matches1.index);
 console.log(matches1[0]);
 console.log(pattern1.lastIndex);

 //第二次调用
 matches1=pattern1.exec(text1);
 console.log(matches1.index);
 console.log(matches1[0]);
 console.log(pattern1.lastIndex);

 var pattern2=/.his/g;

 //第一次调用
 var matches2=pattern2.exec(text1);
 console.log(matches2.index);
 console.log(matches2[0]);
 console.log(pattern2.lastIndex);
 //第二次调用
 matches2=pattern2.exec(text1);
 console.log(matches2.index);
 console.log(matches2[0]);
 console.log(pattern2.lastIndex);


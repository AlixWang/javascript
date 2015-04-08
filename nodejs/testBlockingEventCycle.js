/**
 * 
 * @authors Wang Jun (wangjun.org)
 * @date    2015-03-19 00:45:38
 * @version $Id$
 */
//阻塞时间循环的代码
var EE=require("events").EventEmitter;
var ee=new EE;
var die=false;

ee.on('die',function(){
	die=true;
});

setTimeout(function(){
	ee.emit('die');
},100);
while(!die){

}
console.log("done");



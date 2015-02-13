//concat() 对数组进行合并
var colors=["red","grey","yellow"];

var colors2=colors.concat("black",["Alix","Wang"]);

console.log(colors2.toLocaleString());

//slice()   截取数组
var colors3=colors.slice(1);
console.log(colors3.toLocaleString());
var colors4=colors2.slice(2,5);
console.log(colors4.toString());

var colors5=colors2.slice(-4,-1); //与slice(2,5)相同
console.log(colors5.toString());

//splice()  对数组进行 delete insert replace

//delete
var colors6=colors2.splice(1,2);
console.log(colors2.toString());

//insert
var colors7=colors2.splice(1,0,"grey","yellow");
console.log(colors2.toString());

//replace
colors2.splice(1,2,"1","2");
console.log(colors2.toString());







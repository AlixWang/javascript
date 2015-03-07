var number=[1,2,3,4,5,6,7,8];
number.reverse();   //逆序排列数组
console.log(number);

//sort()
var value=[2,45,13,2,12,03,14,24];
value.sort();   //只是根据字符串的大小进行比较所以不适用
console.log(value.toString());

//构造一个比较函数
function compare(value1,value2){
    if(value1>value2){
        return 1;
    }
    if(value1<value2){
        return -1;
    }
    if(value1=value2){
        return 0;
    }
}

value.sort(compare);    //将比较函数带入sort()
console.log(value.toString());

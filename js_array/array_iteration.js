/*
 *  数组迭代
 *  every();
 *  some();
 *  map();
 *  filter();
 *  forEatch();
 *
 * */

 //every()
    var values=[1,2,3,4,5,6,5,4,3,2,1];

    var everyResault=values.every(function (item,index,array){
        return (item > 2);
    });
    console.log(everyResault);


 //some()
    var someResault=values.some(function (item,index,array){
        return (item > 2);
    });
    console.log(someResault);

 //filter()

    var filterResault=values.filter(function (item,index,array){
        return (item>2);
    });
    console.log(filterResault);


 //map()
    var mapResault=values.map(function (item,index,array){
        return (item*2);
    });
    console.log(mapResault);


 //forEach()
    var forEachResault=values.forEach(function (item,index,array){
        
    });

    console.log(forEachResault);






/*
 * reduce()
 * reduceRight()
 *
 * */
    
    //reduce();
    var number=[1,2,3,4,5,6];

    var reduceResault=number.reduce(function (pre,cur,index,array){
        return pre+cur;
    });
    console.log(reduceResault);


    //reduceRight()
    var reduceRightResault=number.reduceRight(function (pre,cur,index,array){
        return pre*cur;
    
    });
    console.log(reduceRightResault);





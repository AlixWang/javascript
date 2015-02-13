/*
 *
 * */

    var arr=new Array();
    if(arr instanceof Array){
        console.log("This is Array Object");
    }

    if(Array.isArray(arr)){ //onlly IE9+ chrom opear firefox can use this way
        console.log("this is also can check array");
    }

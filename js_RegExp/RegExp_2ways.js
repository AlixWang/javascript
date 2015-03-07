var parttern=null,i;
    for(i=0;i<10;i++){
        var re= /cat/ig;
        console.log(re.test("catthisis"));
    }

    for(i=0;i<10;i++){
        var re= new RegExp("cat","ig");
        console.log(re.test("catthisis"));
    }

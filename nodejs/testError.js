/*
 thsi file is to test nodejs error working 
*/

var http = require('http');

var options = {
    host:'localhost',
    port:'80',
    path:'/'
}

var req = http.get(options,function(res){
    console.log('This will never get called');
});

req.on('error',function(e){
    console.log('Got That pesky error trapped');
});

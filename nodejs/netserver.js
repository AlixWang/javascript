var net=require("net"),chat=net.createServer(),clientList=[];
chat.on('connection',function (client){
    client.name=client.remoteAddress+":"+client.remotePort;
    client.write("HI"+client.name+"!\n");
    clientList.push(client);
    
    client.on('data',function(data){
        broadcast(data,client);
    });

    client.on('end',function(){
    clientList.splice(clientList.indexOf(client), 1);
    });

});

function broadcast(message,client){
    var cleanup=[];    
    for(var i=0;i<clientList.length;i++){            
        if(client!==clientList[i]){
            if(clientList[i].writable){
                
                clientList[i].write(client.name+"says"+message);

            }else{
            cleanup.push(clientList[i]);
            clientList[i].destroy();
            }
    }
}
    for(i=0;i<cleanup.length;i+=1) {
            clientList.splice(clientList.indexOf(cleanup[i]), 1)
    }
} 
chat.listen(8000);

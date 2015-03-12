var net=require("net"),chat=net.createServer(),clientList=[];
chat.on('connection',function (client){
    client.name=client.remoteAddress+":"+client.remotePort;
    client.write("HI"+client.name+"!\n");
    clientList.push(client);
    client.on('data',function(data){
        broadcast(data,client);
    });
});

function broadcast(message,client){
    for(var i=0;i<clientList.length;i++){
        if(client!==clientList[i]){
        clientList[i].write(client.name+"says"+message);
        }
    }
}
 
chat.listen(8000);

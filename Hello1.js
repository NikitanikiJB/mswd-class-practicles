var http= require('http');
http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    add = require (`./new.html`)
    switch(path){
        case '':
            res.writeHead(200,{'Context-type':"text/html"});
            res.end(add);
            break;
        case '/about': 
        res.writeHead(200,{'Context-type':"text/plain"});
            res.end("hello this is ABOUT PAGE");
            break; 
        default :    
            res.writeHead(404,{'Context-type':"text/plain"});
            res.end("notfound");
            break;
}}).listen(8081);
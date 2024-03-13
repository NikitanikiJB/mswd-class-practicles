var http = require('http');
http.createServer(function(req,res)
{
    //var path = req.url.replace, '').toLowerCase();
    switch(req.url)
    {
        case ' ':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Homepage")
            break;

        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<margin left='100px'>About</margin>");
            break;
        case '/contact':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>This page is a contact info page</h1><p>i wont give you my contacts as you are a stranger</p>");
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end("<h1>My First ROUTING DOCUMENT</h1><p>This is default in switch</p>");
            break;
    }
    
}).listen(8080);
console.log("Working..........................")
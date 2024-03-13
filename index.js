const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url  = req.url;

    fs.appendFile('log.txt', new Date().toTimeString() +"\n", (err) => {
        if (err) console.error('Error writing to log file:', err);
    });

    res.setHeader('Content-Type', 'text/plain');

    switch (url) {
        case '/':
            res.writeHead(200);
            res.end("Welcome to the BarterX");
            break;
        case '/products':
            res.writeHead(200);
            res.end("Here are the products up for Sale in BarterX");
            break;
        case '/login':
            res.writeHead(200);
            res.end("Login to the BarterX");
            break;
        case '/signup':
            res.writeHead(200);
            res.end("Sign up to the BarterX");
            break;
        case '/profile':
            res.writeHead(200);
            res.end("Trader Profile");
            break;
        case '/cart':
            res.writeHead(200);
            res.end("Your Shopping Cart is here");
            break;
        case '/checkout':
            res.writeHead(200);
            res.end("Let's start shipping");
            break;
        case '/orders':
            res.writeHead(200);
            res.end("Your Orders are here");
            break;
        case '/categories':
            res.writeHead(200);
            res.end("Browse Categories");
            break;
        case '/chat':
            res.writeHead(200);
            res.end("Your Chat with fellow Traders");
            break;
        case '/contact':
            res.writeHead(200);
            res.end("Contact Us at");
            break;
        case '/about':
            res.writeHead(200);
            res.end("The modern approach to trading our commodities");
            break;
        default:
            res.writeHead(404);
            res.end("Page not found");
            break;
    }
}).listen(8000, () => {
    console.log(`Server initiated on port 8000...`);
});

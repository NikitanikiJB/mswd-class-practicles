
const express = require('express');
const app = express();

//const port = 3000;
 
/* Serving static files (HTML, CSS, JS)
app.use(express.static('public'));
//Defining a route for handling client communication
app.get('/api/message', (req, res) => {
    const message = 'Hello Geek. This Message is From Server';
    res.json({ message });
});
 
// Starting the server
app.listen(port, () => {
    console.log(Server is listening at http://localhost:${port});
});*/

app.get('/',(req, res) => {res.send(`<h1>Hello,this is HomePage!</h1> 
                                         <a href = "/about"> Go to About page</a>`)})
app.get('/about',(req, res) => {res.send(`<h1>Hello,this is AboutPage!</h1> 
                                         <a href = "/"> Go to Home page</a>`)})
app.get('*',(req, res) => {res.send(`<h1>Sorry,page not found</h1> 
                                         <a href = "/"> Go to Home page</a>
                                         <a href = "/about"> Go to About page</a>`)})
app.listen(8080)
console.log("Server activated!")
                                

//"app.use" for connecting middleware
//next is used for repeating the download of certain functions
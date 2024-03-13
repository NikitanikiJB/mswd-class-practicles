
const express = require('express');
const app = express();
const logs =(req,res,next)=>{
    const url = req.url
    const log = new Date().getDate()
    //console.log(log);
    next();
}
app.use(logs)

app.get('/about',logs,(req, res) => {
    const currentdate = new Date().toDateString();
                                        res.send(`<h1>Hello,this is AboutPage!</h1> 
                                         <a href = "/"> Go to Home page</a>)},
                                         <p>date : ${currentdate}</p>`)})
app.get('*',(req, res) => {res.send(`<h1>Sorry,page not found</h1> 
                                         <a href = "/"> Go to Home page</a>
                                         <a href = "/about"> Go to About page</a>`)})
app.listen(8080)
console.log("Server activated!")
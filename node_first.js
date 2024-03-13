//console.log("my first node file");
const { Console } = require('console');
const fs = require('fs');
const os = require('os')


//fs.appendFile("First Text","The End")
fs.appendFile("forth Text", "morning\n", (err) => {
    if (err){
        console.log("cant write");
    }
});
//fs.appendFileSync("First Text","\n hello");
//var user = os.userInfo();
//const node =require('./node2.js');
//fs.appendFileSync("First Text","THE START\n",`hi ${user.username}`);
//console.log(user);
//fs.appendFileSync("First Text",`\n hi ${user.username} is me ${node.name} and age is ${node.age}`);
//console.log(user);
//fs.appendFileSync("Second Text","\n boenus dias");
//console.log(process.argv);
//console.log(module);
/*fs.unlink("Second Text",(err) => {
    if (err){
        console.log("cant write");
    }
});
fs.unlinkSync("First Text");*/
//var data =fs.readFileSync("third Text",{encoding:'utf-8'});
//console.log(data);



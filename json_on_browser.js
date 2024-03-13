const express = require('express');
const data = require('C:\Users\HP\Desktop\mswd_nodejs_practicals\file-n43.json')
const app=express();
app.get('/search', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})
app.listen(8080)
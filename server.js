'use strict';
var express = require('express');
var app = express();
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.listen('3333',function(req,res){
  console.log('happy-app is running on the port localhost:3333');
});

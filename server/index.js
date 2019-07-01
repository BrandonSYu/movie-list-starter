const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text());

let port = 5000;
app.post('', function(req, res){
    
})
app.get('', function(req, res){

});

app.listen(port, function(){
    console.log('listening on port ' + port)
})
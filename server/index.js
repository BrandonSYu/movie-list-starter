const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js').connect;

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text());

let port = 5000;
app.post('/movies', function(req, res){
    console.log(req.body + 'FROM POST');
    var term = req.body;
    db.query(`SELECT * FROM MOVIES WHERE title = '${term}'`, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
app.post('/add', function(req, res){
    console.log(req.body + 'FROM POST');
    var term = req.body;
    db.query(`INSERT INTO MOVIES (title, watched) VALUES ('${term}', false)`, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            res.send();
        }
    })
})
app.get('/movies', function(req, res){
    db.query(`SELECT * FROM MOVIES`, (err, result) => {
        if(err){
            console.log(err);
            res.send()
        }else{
            res.send(result);
        }
    })
    //res.send('Hi')
});

app.listen(port, function(){
    console.log('listening on port ' + port)
})
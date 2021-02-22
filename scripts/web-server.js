var express = require('express');
var path = require('path');
const fs = require('fs');
var events = require('./eventsController');
var app = express();
app.disable('x-powered-by');
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);
app.post('/data/user/:userName', events.save);
app.get('*', function (req,res){ res.sendFile(rootPath + '/app/index.html');});


// app.get('/getAll', function(req,res){
//     fs.readdir(rootPath + '/app'+'/data/event/', function (err, files) {
//         //handling error
//         if (err) {
//             return console.log('Unable to scan directory: ' + err);
//         } 
//         res.send({files:files});
//     });
// });

app.listen(8000);
console.log('Listening on port 8000...');
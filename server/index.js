'use strict'

var express = require('express'),
    fs = require('fs'),
    //https = require('https'),
    http = require('http'),
    path = require('path'),
    mysql = require('mysql'),
    bodyParser = require('body-parser');

var app = express();
var directoryToServe = 'client';
var port = 3443;	

app.use('/', express.static(path.join(__dirname, '..', directoryToServe)));

// Directs to angular modules to have modules stored locally
app.use('/angular', express.static(path.join(__dirname, '..', 'node_modules/angular')));
app.use('/angular-route', express.static(path.join(__dirname, '..', 'node_modules/angular-route')));

// Use body Parser for reading sent data   -------------Necessary for later
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*// Use ssl certificate and key
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
};

// Create https server
https.createServer(httpsOptions, app)
  .listen(port, function () {
    console.log(`Server running at https://localhost:${port}`);
});*/

//  Running http server until we get SSL certificates
http.createServer(app)
  .listen(port, function () {
    console.log("Server Running at https://192.168.1.100:3443");
  });

//-----------TEST---------------------------------------------------
// test login post method
app.post('/login', function(req, res, next) {
    console.log('received ' + req.body.username + ' ' + req.body.password);
    next();
}, function (req, res, next) {
    // determine if account exists middleware
    // determine user type middleware
    // pretend it is student
    if (req.body.username === "a") {
        res.send({"firstName":'jamie',"lastName":'shmoe',"type": 'student'});
    } else if (req.body.username === "b") {
        res.send({"firstName":'joe',"lastName":'shmoe',"type":'student'});
    } else {
        res.send({"firstName":'',"lastName":req.body.username,"type":'student'});
    }
});
//--------------------------------------------------------------------

// Create a connection to MySql Server and Database
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'sblpass1',
    database: 'sblDB'
});

connection.connect(function(err){
  if(!err) {
      console.log("Database is connected");    
  } else {
      console.log("Error connecting database");    
  }
});
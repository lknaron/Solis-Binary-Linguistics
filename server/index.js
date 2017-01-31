'use strict'

const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

const app = express();
const directoryToServe = 'client';
const port = 3443;	

app.use('/', express.static(path.join(__dirname, '..', directoryToServe)));

// Directs to angular module to have module stored locally
app.use('/angular', express.static(path.join(__dirname, '..', 'node_modules/angular')));

// Use body Parser for reading sent data   -------------Necessary for later
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Use ssl certificate and key
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
};

// Create https server
https.createServer(httpsOptions, app)
  .listen(port, function () {
    console.log(`Server running at https://localhost:${port}`);
});

// test login post method
app.post('/login', function(req, res, next) {
    console.log('received ' + req.body.username + ' ' + req.body.password);
    next();
}, function (req, res, next) {
    // determine if account exists middleware
    // determine user type middleware
    // temp assignment - pretend 1 is student
    var userType = {"typeUser":1}
    res.send(userType);
});

// Create a connection to MySql Server and Database
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : 'password',
    database: 'testDB', 
});

connection.connect(function(err){
  if(!err) {
      console.log("Database is connected");    
  } else {
      console.log("Error connecting database");    
  }
});
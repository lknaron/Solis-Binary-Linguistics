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

//  Create mysql connection pool
var mysql_pool  = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password        : 'sblpass1',
    database        : 'sblDB'
});

// Log in authentication
app.post('/login', function(req, res, next) {
  // Get connection to pool
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      console.log('Error getting mysql_pool connection: ' + err);
      throw err;
    }
    //  Use connection to query log in credentials
    connection.query("SELECT * FROM User_ WHERE ASURITE_ID = ?", [req.body.username], function(err2, rows){
      if(err2) {
        console.log('Error performing query: ' + err2);
        throw err2;
      } else if (rows && rows[0].UserPassword == req.body.password) {
        res.send({"error" : 0, "firstName" : rows[0].FirstName,"lastName": rows[0].LastName,"type": rows[0].UserRole});
      } else if (!rows.length) {
        res.send({"error" : 1});  // Responds error 1 if no user found
      } else if (rows && rows[0].UserPassword != req.body.password) {
        res.send({"error" : 2});  // Responds error 2 if incorrect password
      } 
      connection.release();
    });
  });
});
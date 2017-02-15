/*
 * File: logInRouter.js
 * Description: Processes all requests routed from the server made to /login
 */

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');
var jwt = require('jsonwebtoken');

// invoked for any requested passed to this router
router.use(function(req, res, next) {
  next();
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
router.post('/', function(req, res) {
  // Get connection to pool
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      console.log('Error getting mysql_pool connection: ' + err);
      throw err;
    }
    //  Use connection to query log in credentials
    connection.query('SELECT User_.*, Application.LastSaved, Application.AppStatus FROM User_ LEFT JOIN Application ON ' +
                     'User_.ASURITE_ID = Application.ASURITE_ID WHERE User_.ASURITE_ID = ?', [req.body.username], function(err2, rows){
      if(err2) {
        console.log('Error performing query: ' + err2);
        throw err2;
      } else if (!rows.length) {
        res.send({'error' : 1});  // Responds error 1 if no user found
      } else if (rows && rows[0].UserPassword != req.body.password) {
        res.send({'error' : 2});  // Responds error 2 if incorrect password
      } else if (rows && rows[0].UserPassword == req.body.password) {
        var token = jwt.sign({username:req.body.username}, 'sblapp123');
        res.send({'error' : 0, 'firstName' : rows[0].FirstName, 'lastName': rows[0].LastName, 'type': rows[0].UserRole, 
              'lastSaved' : rows[0].LastSaved, 'appStatus' : rows[0].AppStatus, 'token':token});
        updateLoginDate(req.body.username);
      }
      connection.release();
    });
  });
});

// Update users last login date/time
function updateLoginDate (user) {
  var dateObj = new Date().toISOString().slice(0, 19).replace('T', ' ');
    mysql_pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      console.log('Error getting mysql_pool connection: ' + err);
      throw err;
    }
    connection.query('UPDATE User_ SET LoginTime = ? Where ASURITE_ID = ?', [dateObj, user], function (err2) {
      if (err2) {
        console.log('Error performing query: ' + err2);
        throw err2;
      }
      connection.release();
    });
  }); 
}

module.exports = router;
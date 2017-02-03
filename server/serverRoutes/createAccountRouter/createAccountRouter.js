// Create Account router ('/createAccount')

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');

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

router.post('/', function(req, res) {
  checkDuplicate(req, res);
});

function checkDuplicate(req, res) {
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      console.log('Error getting mysql_pool connection: ' + err);
      throw err;
    }
    connection.query('SELECT * FROM User_ WHERE ASURITE_ID = ?', [req.body.ASURITE_ID], function(err2, rows) {
      console.log("Rows  " + rows);
      if(err2) {
        console.log('Error performing query: ' + err2);
        throw err2;
      } else if (!rows.length) {
        saveAccount(req, res);
      } else if (rows) {
        res.send({'error' : 1});
      }
      connection.release();
    });
  });
}

function saveAccount(req, res) {
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      console.log('Error getting mysql_pool connection: ' + err);
      throw err;
    }
    connection.query('INSERT INTO User_ SET ?', [req.body], function(err2) {
      if(err2) {
        console.log('Error performing query: ' + err2);
        throw err2;
      } else {     
        console.log("Inserted");
        res.send({'error' : 0});
        console.log("error sent");
      }
      connection.release();
    });
  });
}

module.exports = router;

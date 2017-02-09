// Create Account router ('/contactInfo')

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');

// invoked for any request passed to this router
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

// Saves/Updates user entered information into application
router.post('/', function(req, res) {
  console.log(req.body.ASURITE_ID);
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      console.log('Error getting mysql_pool connection: ' + err);
      throw err;
    }
    connection.query('SELECT * FROM Application WHERE ASURITE_ID = ?', [req.body.ASURITE_ID], function(err2, rows) {
      if(err2) {
        console.log('Error performing query: ' + err2);
        throw err2;
      } else if (!rows.length) {
        connection.query('INSERT INTO Application SET ?', [req.body], function(err3) {
          if(err3) {
            console.log('Error performing query: ' + err3);
            throw err3;
          } 
        });
      } else if (rows) {
        connection.query('UPDATE Application SET ? WHERE ASURITE_ID = ?', [req.body, req.body.ASURITE_ID], function(err4) {
          if(err4) {
            console.log('Error performing query: ' + err4);
            throw err4;
          }
        }); 
      }
      connection.release();
    });
  });
});

// Returns data to populate application page if user already saved contact information
router.post('/getContactInfo', function(req, res) {
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      connection.release();
      console.log('Error getting mysql_pool connection: ' + err);
      throw err;
    }
    connection.query('SELECT PhoneNumber, MobileNumber, AddressOne, AddressTwo, AddressCountry, AddressCity, AddressState, AddressZip FROM Application WHERE ASURITE_ID = ?', [req.body.user], function(err2, rows) {
      if(err2) {
        console.log('Error performing query: ' + err2);
        throw err2;
      } else if (!rows.length) {
        // Change to error status for handling??
        res.sendStatus(200);
      } else if (rows) {
        res.send({'PhoneNumber' : rows[0].PhoneNumber, 'MobileNumber' : rows[0].MobileNumber, 'AddressCountry' : rows[0].AddressCountry, 'AddressOne' : rows[0].AddressOne, 
                  'AddressTwo' : rows[0].AddressTwo, 'AddressCity' : rows[0].AddressCity, 'AddressState' : rows[0].AddressState, 'AddressZip' : rows[0].AddressZip});
      } 
      connection.release();
    });
  });
});

module.exports = router;
/*
 * File: coursesRouter.js
 * Description: Processes all requests routed from the server made to /courses
 */

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');

// Invoked for any request passed to this router
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

// Checks if user already has this information saved then Saves/Updates user entered information into application
router.post('/', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query('SELECT * FROM Courses_Taught WHERE ASURITE_ID = ?', [req.body.ASURITE_ID], function(err2, rows) { 
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                connection.query('INSERT INTO Courses_Taught SET ?', [req.body], function(err3) {
                    if(err3) {
                        console.log('Error performing query: ' + err3);
                        throw err3;
                    } else {
                        res.sendStatus(200);
                    }
                });
            } else if (rows) {
                connection.query('UPDATE Courses_Taught SET ? WHERE ASURITE_ID = ?', [req.body, req.body.ASURITE_ID], function(err4) {
                    if(err4) {
                        console.log('Error performing query: ' + err4);
                        throw err4;
                    } else {
                        res.sendStatus(200);
                    }
                }); 
            }
            connection.release();
        });
    });
});

// Returns data to populate application page if user already saved courses information
router.post('/getCoursesInfo', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query('SELECT * FROM Courses_Taught WHERE ASURITE_ID = ?', [req.body.user], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows) {
                for (key in rows[0]) {
                    if (rows[0].hasOwnProperty(key) && rows[0][key] == 0) {
                        delete rows[0][key];
                    }
                }
                var otherCourses = rows[0]['Other'];
                delete rows[0]['TaughtID'];
                delete rows[0]['ASURITE_ID'];
                delete rows[0]['Other'];
                res.send({'data':{'courses': rows, 'other' : otherCourses}});
            } 
            connection.release();
        });
    });
});

module.exports = router;
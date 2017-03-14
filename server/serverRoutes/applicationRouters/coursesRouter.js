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

// Creates/Updates user course choices
router.post('/', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        if (req.body.data[0].length === 0) {
            connection.query('DELETE FROM Course_Competencies WHERE ASURITE_ID = ?', [req.user.username], function(err2) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                }
            });
        } 
        if (req.body.data[0].length != 0) {
            connection.query('DELETE FROM Course_Competencies WHERE ASURITE_ID = ?', [req.user.username], function(err3) {
                if(err3) {
                    console.log('Error performing query: ' + err3);
                    throw err3;
                } else {
                    connection.query('INSERT INTO Course_Competencies (isCourse, CourseLevel, OtherCourse, OtherLevel, ASURITE_ID) VALUES ?', [req.body.data[0]], function(err4) { 
                        if(err4) {
                            console.log('Error performing query: ' + err4);
                            throw err4;
                        }
                    });
                } 
            });
        }
        connection.query('UPDATE Application SET isCoursesComplete = ?, AppStatus = ? WHERE ASURITE_ID = ?', [req.body.isCoursesComplete, req.body.appStatus, req.user.username], function(err5) {
            if (err5) {
                throw err5;
            }
            res.sendStatus(200);
        });
        connection.release();
    });
});

// Returns data to populate application page if user already saved courses information
router.get('/', function(req, res) {
    var courses = [];

    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query('SELECT isCourse, CourseLevel, OtherCourse, OtherLevel FROM Course_Competencies WHERE ASURITE_ID = ?', [req.user.username], function(err2, rows) { 
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (rows[0]) {
                for (var i = 0; i < rows.length; i++) {                 
                    courses.push(rows[i]);
                }
            }   
            connection.release();
            sendPopulateResponse(res, courses);
        });
    });
});

function sendPopulateResponse (res, courses) {
    res.send({'data':{'courseData': courses}});      
}

module.exports = router;
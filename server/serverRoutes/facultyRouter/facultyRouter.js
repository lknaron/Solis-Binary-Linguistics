/*
 * File: facultyRouter.js
 * Description: Processes all requests routed from the server made to faculty
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

// Get Student Application Names
router.get('/evaluations/appnames', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT CONCAT(FirstName, ' ', LastName) AS StudentName FROM User_ WHERE UserRole = 'student'", function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var Names = [];
                for (var i = 0; i < rows.length; i++) {
                    Names.push(rows[i].StudentName); 
                }
                res.send(Names);
            } 
            connection.release();
        });
    });
});

// Inserts Student Evaluation into Database
router.post('/evaluation', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query('INSERT INTO Student_Evaluation SET ?', [req.body], function(err2) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else {
                res.sendStatus(200);
                }
        });
        connection.release();
    });
});

// Get Student Evaluation Names
router.get('/evaluation/names', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query('SELECT DISTINCT StudentName FROM Student_Evaluation', function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var StudentNames = [];
                for (var i = 0; i < rows.length; i++) {
                    StudentNames.push(rows[i].StudentName);
                }
                res.send(StudentNames);
            } 
            connection.release();
        });
    });
});

// View Student Evaluations
router.post('/evaluations', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT DATE_FORMAT(DateCreated, '%m/%d/%Y') AS DateCreated, QOneScore, QOneComments, QTwoScore, QTwoComments, QThreeScore, QThreeComments, QFourScore, QFourComments From Student_Evaluation WHERE StudentName = ?", [req.body.name], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var StudentEvals = [];
                for (var i = 0; i < rows.length; i++) {
                var Eval = {
                    'DateCreated'   : rows[i].DateCreated, 
                    'QOneScore'     : rows[i].QOneScore, 
                    'QOneComments'  : rows[i].QOneComments, 
                    'QTwoScore'     : rows[i].QTwoScore, 
                    'QTwoComments'  : rows[i].QTwoComments, 
                    'QThreeScore'   : rows[i].QThreeScore, 
                    'QThreeComments': rows[i].QThreeComments, 
                    'QFourScore'    : rows[i].QFourScore, 
                    'QFourComments' : rows[i].QFourComments};
                    StudentEvals.push(Eval);
                }
                var response = JSON.stringify(StudentEvals)
                res.send(response);
            } 
            connection.release();
        });
    });
});

module.exports = router;
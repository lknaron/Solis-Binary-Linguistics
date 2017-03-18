/*
 * File: pcActionsRouter.js
 * Description: Processes requests routed from the server made to /getPCActions. Returns call to action items for the program chair home page.
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

router.post('/', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        console.log('running pc actions');
        console.log('user is of type ' + req.body.type);
        res.send({test:1});
        var deadline = 'SELECT CurrentSemester, DeadlineDate FROM Deadline';
        // checks deadline
        function checkDeadline() {
            connection.query(deadline, function(err2, rows) {
                if (err2) {
                    throw err2;
                }
                if (rows.length == 0) {
                    return null;
                }
                else {
                    return ({CurrentSemester:rows[0].CurrentSemester, DeadlineDate:rows[0].DeadlineDate});
                }    
            });
        }
        connection.release();
    });
});   
module.exports = router;
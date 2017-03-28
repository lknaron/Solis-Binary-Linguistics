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

router.get('/', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT Location, Subject, CatalogNumber, CourseNumber FROM Schedule_ WHERE AssignedStatus = 'Incomplete'", function(err1, rows) {
            var hasActions = 0;
            var incompleteClasses = [];
            for (var i = 0; i < rows.length; i++) {
                incompleteClasses.push(rows[i]);    
            }
            if (rows.length > 0) {
                hasActions = 1;
            }
            res.send({hasActions:hasActions, incompleteClasses:incompleteClasses});
        });
        
        connection.release();
    });
});   
module.exports = router;
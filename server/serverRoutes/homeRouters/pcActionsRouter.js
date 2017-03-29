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
            connection.query("SELECT DISTINCT Placement.TA, Placement.TAStatus, Placement.TATwo, Placement.TATwoStatus, Placement.GraderOne, Placement.GraderOneStatus, Placement.GraderTwo, Placement.GraderTwoStatus, Placement.TAHours, Placement.TATwoHours, Placement.GraderOneHours, Placement.GraderTwoHours, Schedule_.Location, Schedule_.Subject, Schedule_.CatalogNumber, Schedule_.CourseNumber, Schedule_.TARequiredHours, Schedule_.GraderRequiredHours FROM Placement LEFT JOIN Schedule_ ON Placement.ScheduleID = Schedule_.ScheduleID", function(err2, rows) {
                if (rows.length > 0) {
                    hasActions = 1;
                }
                var placementData = rows;
                var today = new Date().toISOString().slice(0, 19).replace('T', ' ');
                console.log(today);
                // query all application creation dates here
                res.send({hasActions:hasActions, incompleteClasses:incompleteClasses, placements:placementData});
            });
        });
        
        connection.release();
    });
});   
module.exports = router;
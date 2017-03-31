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
        connection.query("SELECT Location, Subject, CatalogNumber, CourseNumber FROM Schedule_ WHERE AssignedStatus = 'Incomplete'", function(err1, rows) {
            var hasActions = 0;
            var incompleteClasses = [];
            for (var i = 0; i < rows.length; i++) {
                incompleteClasses.push(rows[i]);    
            }
            if (rows.length > 0) {
                hasActions = 1;
            }
            connection.query("SELECT DISTINCT Placement.TA, Placement.TAStatus, Placement.TATwo, Placement.TATwoStatus, Placement.GraderOne, Placement.GraderOneStatus, Placement.GraderTwo, Placement.GraderTwoStatus, Placement.TAHours, Placement.TATwoHours, Placement.GraderOneHours, Placement.GraderTwoHours, Schedule_.Location, Schedule_.Subject, Schedule_.CatalogNumber, Schedule_.CourseNumber, Schedule_.TARequiredHours, Schedule_.GraderRequiredHours FROM Placement LEFT JOIN Schedule_ ON Placement.ScheduleID = Schedule_.ScheduleID", function(err2, placementData) {
                if (rows.length > 0) {
                    hasActions = 1;
                }
                connection.query("SELECT DateCreated FROM Application WHERE DateCreated > ? AND AppStatus != 'new'", [req.body.lastLogin], function(err3, newAppsCount) {                 
                    connection.query("SELECT AppStatus FROM Application WHERE AppStatus = 'incomplete'", function(err4, incompleteCount) {
                        connection.query("SELECT AppStatus FROM Application WHERE AppStatus = 'complete'", function(err5, completeCount) {
                            connection.query("SELECT DeadlineDate FROM Deadline", function(err5, deadlineDate) {
                               res.send({hasActions:hasActions, incompleteClasses:incompleteClasses, placements:placementData, newApps:newAppsCount.length, incompleteApps:incompleteCount.length, completeApps:completeCount.length, deadline:deadlineDate[0].DeadlineDate}); 
                            });
                        });
                    });
                });
            });
        });
        
        connection.release();
    });
});   
module.exports = router;
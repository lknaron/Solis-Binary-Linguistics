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
                var placements = {};
                placements = courseTAandGraderChecks(placementData);
                connection.query("SELECT DateCreated FROM Application WHERE DateCreated > ? AND AppStatus != 'new'", [req.body.lastLogin], function(err3, newAppsCount) {                 
                    connection.query("SELECT AppStatus FROM Application WHERE AppStatus = 'incomplete'", function(err4, incompleteCount) {
                        connection.query("SELECT AppStatus FROM Application WHERE AppStatus = 'complete'", function(err5, completeCount) {
                            connection.query("SELECT DeadlineDate FROM Deadline", function(err5, deadlineDate) {
                               res.send({hasActions:hasActions, incompleteClasses:incompleteClasses, placements:placements, newApps:newAppsCount.length, incompleteApps:incompleteCount.length, completeApps:completeCount.length, deadline:deadlineDate[0].DeadlineDate}); 
                            });
                        });
                    });
                });
            });
        });        
        connection.release();
    });
    function courseTAandGraderChecks(data) {
        var coursesMissingTA = [];
        var coursesMissingGrader = [];
        var coursesNeedTAHours = [];
        var coursesNeedGraderHours = [];
        var coursesNeedTAConfirmation = [];
        var coursesNeedGraderConfirmation = [];
        var firstTAHours = 0;
        var secondTAHours = 0;
        var firstGraderHours = 0;
        var secondGraderHours = 0;
        for (var i = 0; i < data.length; i++) {
            // checks if each course is missing a TA assignment
            if (data[i].TA === null && data[i].TATwo === null) {
                coursesMissingTA.push({Location:data[i].Location, Subject:data[i].Subject, CatalogNumber:data[i].CatalogNumber, CourseNumber:data[i].CourseNumber});
            }
            // checks if each course is missing a Grader assignment
            if (data[i].GraderOne === null && data[i].GraderTwo === null) {
                coursesMissingGrader.push({Location:data[i].Location, Subject:data[i].Subject, CatalogNumber:data[i].CatalogNumber, CourseNumber:data[i].CourseNumber});
            }
            // checks if each course is not meeting the required TA hours
            if (data[i].TARequiredHours !== null) {
                if (data[i].TAHours !== null) {
                    firstTAHours = data[i].TAHours;
                } 
                if (data[i].TATwoHours !== null) {
                    secondTAHours = data[i].TATwoHours;
                }
                var assignedTAHours = firstTAHours + secondTAHours;
                if (assignedTAHours < data[i].TARequiredHours) {
                    var missingTAHours = data[i].TARequiredHours - assignedTAHours;
                    coursesNeedTAHours.push({Location:data[i].Location, Subject:data[i].Subject, CatalogNumber:data[i].CatalogNumber, CourseNumber:data[i].CourseNumber, neededHours:missingTAHours});
                }
            }
            // checks if each course is not meeting the required Grader hours
            if (data[i].GraderRequiredHours !== null) {
                if (data[i].GraderOneHours !== null) {
                    firstGraderHours = data[i].GraderOneHours;
                } 
                if (data[i].GraderTwoHours !== null) {
                    secondGraderHours = data[i].GraderTwoHours;
                }
                var assignedGraderHours = firstGraderHours + secondGraderHours;
                if (assignedGraderHours < data[i].GraderRequiredHours) {
                    var missingGraderHours = data[i].GraderRequiredHours - assignedGraderHours;
                    coursesNeedGraderHours.push({Location:data[i].Location, Subject:data[i].Subject, CatalogNumber:data[i].CatalogNumber, CourseNumber:data[i].CourseNumber, neededHours:missingGraderHours});
                }
            }
            // checks if each course has a TA not confirmed            
            if ((data[i].TA !== null && data[i].TAStatus !== 'Confirmed') || (data[i].TATwo !== null && data[i].TATwoStatus !== 'Confirmed')) {
                coursesNeedTAConfirmation.push({Location:data[i].Location, Subject:data[i].Subject, CatalogNumber:data[i].CatalogNumber, CourseNumber:data[i].CourseNumber});
            }
            // checks if each course has a Grader not confirmed            
            if ((data[i].GraderOne !== null && data[i].GraderOneStatus !== 'Confirmed') || (data[i].GraderTwo !== null && data[i].GraderTwoStatus !== 'Confirmed')) {
                coursesNeedGraderConfirmation.push({Location:data[i].Location, Subject:data[i].Subject, CatalogNumber:data[i].CatalogNumber, CourseNumber:data[i].CourseNumber});
            }
        }
        //console.log(coursesMissingTA);
        //console.log(coursesMissingGrader);
        //console.log(coursesNeedTAHours);
        //console.log(coursesNeedGraderHours);
        //console.log(coursesNeedTAConfirmation);
        //console.log(coursesNeedGraderConfirmation);
        return {missingTA:coursesMissingTA, missingGrader:coursesMissingGrader, needTAHours:coursesNeedTAHours, needGraderHours:coursesNeedGraderHours, needTAConfirmation:coursesNeedTAConfirmation, needGraderConfirmation:coursesNeedGraderConfirmation};
    }
});   
module.exports = router;
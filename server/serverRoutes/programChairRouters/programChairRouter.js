/*
 * File: programChairRouter.js
 * Description: Processes all requests routed from the server made to /programChiar
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
    /*mysql_pool.getConnection(function(err, connection) {
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
                    } else {
                        res.sendStatus(200);
                    }
                });
            } else if (rows) {
                connection.query('UPDATE Application SET ? WHERE ASURITE_ID = ?', [req.body, req.body.ASURITE_ID], function(err4) {
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
    });*/
});

// Returns data to populate class drop down on program chair home page
router.get('/getClassNames', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('SELECT * FROM Schedule_', function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else if (!rows.length) {
                    res.sendStatus(200);
                } else if (rows[0]) {
                    res.send(rows);
                } 
                connection.release();
            });
        }
    });
});

// Returns data to populate class summary page
router.post('/getClassInfo', function(req, res) {
    var sendData = [];
    var schedID = 0;

    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query('SELECT * FROM Schedule_ WHERE CourseNumber = ?', [req.body.class], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                sendData.push(rows);
                schedID = rows[0].ScheduleID
                connection.query('SELECT * FROM Enrollment WHERE ScheduleID = ?', [rows[0].ScheduleID], function(err3, rows) {
                    if(err3) {
                        console.log('Error performing query: ' + err3);
                        throw err3;
                    } else if (rows[0]) {
                        sendData.push(rows);
                    } 
                });
                connection.query('SELECT * FROM Placement WHERE ScheduleID = ?', schedID, function(err4, rows) {
                    if(err4) {
                        console.log('Error performing query: ' + err4);
                        throw err4;
                    } else if (rows[0]) {
                        sendData.push(rows);
                    } 
                });
                connection.query('SELECT * FROM Student_Request WHERE ScheduleID = ?', schedID, function(err5, rows) {
                    if(err5) {
                        console.log('Error performing query: ' + err5);
                        throw err5;
                    } else if (rows[0]) {
                        sendData.push(rows);
                    } 
                    connection.release();
                    sendRes(res, sendData);
                });                
            }
        });    
    });
});

function sendRes(res, sendData) {
    res.send(sendData);
}

// Saves updated status in database
router.post('/getStudentNameHours', function(req, res) {
    var sendData = []
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('SELECT FirstName, LastName FROM User_ WHERE ASURITE_ID = ?', [req.body.studentID] , function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else if (rows[0]) {
                    sendData.push(rows);
                } 
            });
            connection.query('SELECT TimeCommitment FROM Application WHERE ASURITE_ID = ?', [req.body.studentID] , function(err3, rows) {
                if(err3) {
                    console.log('Error performing query: ' + err3);
                    throw err3;
                } else if (rows[0]) {
                    sendData.push(rows);
                }
            });
            connection.query('SELECT TAHours FROM Placement WHERE TA = ?', [req.body.studentID] , function(err4, rows) {
                if(err4) {
                    console.log('Error performing query: ' + err4);
                    throw err4;
                } else if (rows[0]) {
                    sendData.push(rows);
                } 
            });
            connection.query('SELECT TATwoHours FROM Placement WHERE TATwo = ?', [req.body.studentID] , function(err5, rows) {
                if(err5) {
                    console.log('Error performing query: ' + err5);
                    throw err5;
                } else if (rows[0]) {
                    sendData.push(rows);
                } 
            });
            connection.query('SELECT GraderOneHours FROM Placement WHERE GraderOne = ?', [req.body.studentID] , function(err5, rows) {
                if(err5) {
                    console.log('Error performing query: ' + err5);
                    throw err5;
                } else if (rows[0]) {
                    sendData.push(rows);
                } 
            });
            connection.query('SELECT GraderTwoHours FROM Placement WHERE GraderTwo = ?', [req.body.studentID] , function(err5, rows) {
                if(err5) {
                    console.log('Error performing query: ' + err5);
                    throw err5;
                } else if (rows[0]) {
                    sendData.push(rows);
                } 
                connection.release();
                sendRes(res, sendData);
            });
        }
    });
});

// Saves updated status in database
router.post('/updateStatus', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('UPDATE Schedule_ SET AssignedStatus = ? WHERE CourseNumber = ?', [req.body.status, req.body.class] , function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else {
                    res.sendStatus(200);
                } 
                connection.release();
            });
        }
    });
});

// Returns data to populate class drop down on program chair home page
router.post('/updateEnrollment', function(req, res) {  
    var dateObj = new Date();
    var schedID = 0;

    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('SELECT * FROM Schedule_ WHERE CourseNumber = ?', [req.body.class], function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else if (rows[0]) {
                    schedID = rows[0].ScheduleID;
                    connection.query('SELECT * FROM Enrollment WHERE ScheduleID = ?', [rows[0].ScheduleID], function(err3, rows) {
                        if(err3) {
                            console.log('Error performing query: ' + err3);
                            throw err3;
                        } else if (rows[0]) {
                            connection.query('INSERT INTO Enrollment (EnrollmentNumCurrent, DateEntered, ScheduleID) VALUES (?, ?, ?)', [req.body.enrollment, dateObj, schedID], function(err4, rows) {
                                if(err4) {
                                    console.log('Error performing query: ' + err4);
                                    throw err4;
                                } else {
                                    connection.release();
                                    res.sendStatus(200); 
                                }
                            });
                        } 
                    });                  
                }
            });    
        }
    });
});

// Saves updated required TA/Grader Hours in database
router.post('/updateRequiredHours', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('UPDATE Schedule_ SET TARequiredHours = ?, GraderRequiredHours = ? WHERE CourseNumber = ?', [req.body.taHours, req.body.graderHours, req.body.class] , function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else {
                    var sendData = [req.body.taHours, req.body.graderHours];
                    res.send(sendData);
                } 
                connection.release();
            });
        }
    });
});

// Returns data to populate class drop down on program chair home page
router.post('/updateAssignedStudents', function(req, res) {  
    var schedID = 0;
    var classNumber = 0;
    if (req.body.deleteClass) {
        classNumber = req.body.deleteClass;
    } else {
        classNumber = req.body.class;
    }
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('SELECT * FROM Schedule_ WHERE CourseNumber = ?', [classNumber], function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else if (rows[0]) {
                    schedID = rows[0].ScheduleID;
                    if (req.body.deleteClass) {
                        connection.query('DELETE FROM Placement WHERE ScheduleID = ?', [schedID], function(err3, rows) {
                            if(err3) {
                                console.log('Error performing query: ' + err3);
                                throw err3;
                            } else {
                                res.sendStatus(200);
                            }
                        });
                    } else if (req.body.deleteStudent && req.body.deleteStudent === 1) {
                        connection.query('UPDATE Placement SET TA = null, TAStatus = null, TAHours = null WHERE ScheduleID = ?', [schedID], function(err4, rows) {
                            if(err4) {
                                console.log('Error performing query: ' + err4);
                                throw err4;
                            } else {
                                checkForNull();
                                res.sendStatus(200);
                            }
                        });
                    } else if (req.body.deleteStudent && req.body.deleteStudent === 2) {
                        connection.query('UPDATE Placement SET TATwo = null, TATwoStatus = null, TATwoHours = null WHERE ScheduleID = ?', [schedID], function(err5, rows) {
                            if(err5) {
                                console.log('Error performing query: ' + err5);
                                throw err5;
                            } else {
                                checkForNull();
                                res.sendStatus(200);
                            }
                        });
                    } else if (req.body.deleteStudent && req.body.deleteStudent === 3) {
                        connection.query('UPDATE Placement SET GraderOne = null, GraderOneStatus = null, GraderOneHours = null WHERE ScheduleID = ?', [schedID], function(err6, rows) {
                            if(err6) {
                                console.log('Error performing query: ' + err6);
                                throw err6;
                            } else {
                                checkForNull();
                                res.sendStatus(200);
                            }
                        });
                    } else if (req.body.deleteStudent && req.body.deleteStudent === 4) {
                        connection.query('UPDATE Placement SET GraderTwo = null, GraderTwoStatus = null, GraderTwoHours = null WHERE ScheduleID = ?', [schedID], function(err7, rows) {
                            if(err7) {
                                console.log('Error performing query: ' + err7);
                                throw err7;
                            } else {
                                checkForNull();
                                res.sendStatus(200);
                            }
                        });
                    } else {
                        connection.query('UPDATE Placement SET TA = ?, TAStatus = ?, TATwo = ?, TATwoStatus = ?, GraderOne = ?, GraderOneStatus = ?, GraderTwo = ?, GraderTwoStatus = ?, TAHours = ?, TATwoHours = ?, GraderOneHours = ?, GraderTwoHours = ? WHERE ScheduleID = ?', [req.body.ta, req.body.taStatus, req.body.taTwo, req.body.taTwoStatus, req.body.graderOne, req.body.graderOneStatus, req.body.graderTwo, req.body.graderTwoStatus, req.body.taAssignedHours, req.body.taTwoAssignedHours, req.body.graderOneAssignedHours, req.body.graderTwoAssignedHours, schedID], function(err8, rows) {
                            if(err8) {
                                console.log('Error performing query: ' + err8);
                                throw err8;
                            } else {
                                res.sendStatus(200);
                            }
                        });    
                    }
                    connection.release();                     
                }
            });    
        }
    });
});

// Will delete placement row associated with class if all assigned students equals null
function checkForNull() {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('DELETE FROM Placement WHERE (TA IS null AND TATwo IS null AND GraderOne IS null AND GraderTwo IS null)', function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else {
                    return;
                }
            });
        }
    });
}

module.exports = router;
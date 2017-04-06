/*
 * File: programChairRouter.js
 * Description: Processes all requests routed from the server made to /programChiar
 */

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require('fs');

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

// gets the deadline date
router.get('/getDeadline', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('SELECT CurrentSemester, DeadlineDate FROM Deadline', function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                }
                res.send({date:rows[0].DeadlineDate, semester:rows[0].CurrentSemester});
                connection.release();
            });
        }
    });
});

// store the deadline date
router.post('/setDeadline', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('UPDATE Deadline SET DeadlineDate = ?, CurrentSemester = ?', [req.body.date, req.body.semester], function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                }
                res.sendStatus(200);
                connection.release();
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
router.post('/evaluationsPC', function(req, res) {
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

// Get all Students in Database
router.post('/applicationNames', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT concat(FirstName, ' ', LastName) Name, AppStatus From User_ INNER JOIN Application ON User_.ASURITE_ID = Application.ASURITE_ID WHERE UserRole = 'student'", [req.body.course], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var Students = [];
                for (var i = 0; i < rows.length; i++) {
                     var FullName = {
                    'Name'       : rows[i].Name,
                     'AppStatus' : rows[i].AppStatus}; 
                    Students.push(FullName);
                }   
                var response = JSON.stringify(Students);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Get Student Applications
router.post('/applications', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT concat(FirstName, ' ', LastName) Name From User_ INNER JOIN Course_Competencies ON User_.ASURITE_ID = Course_Competencies.ASURITE_ID INNER JOIN Application ON User_.ASURITE_ID = Application.ASURITE_ID WHERE isCourse = ? AND isAcademicProbation = 0 AND AppStatus = 'complete' AND (SpeakTest >= 26 OR SpeakTest IS NULL) AND ((isQualified = 1 OR isPrefer = 1) OR (isPreviouslyGrader = 1 OR isPreviouslyTA = 1)) ORDER BY isQualified DESC, isPrefer DESC, isPreviouslyTA DESC, isPreviouslyGrader DESC, GPA DESC", [req.body.course], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var StudentNames = [];
                for (var i = 0; i < rows.length; i++) {
                     var Student = {
                    'Name' : rows[i].Name}; 
                    StudentNames.push(Student);
                }   
                var response = JSON.stringify(StudentNames);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student Contact Info
router.post('/contactInfo', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT UserEmail, PhoneNumber, MobileNumber, AddressOne, AddressTwo, AddressCountry, AddressCity, AddressState, AddressZip FROM Application INNER JOIN User_ ON Application.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var ContactInfo = {
                    'UserEmail'      : rows[0].UserEmail,
                    'PhoneNumber'    : rows[0].PhoneNumber,
                    'MobileNumber'   : rows[0].MobileNumber,
                    'AddressOne'     : rows[0].AddressOne,
                    'AddressTwo'     : rows[0].AddressTwo,
                    'AddressCountry' : rows[0].AddressCountry,
                    'AddressCity'    : rows[0].AddressCity,
                    'AddressState'   : rows[0].AddressState,
                    'AddressZip'     : rows[0].AddressZip}; 
                   
                var response = JSON.stringify(ContactInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student Application Table
router.post('/applicationTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT EducationLevel, DegreeProgram, isFourPlusOne, GPA, isInternationalStudent, SpeakTest, DATE_FORMAT(FirstSession, '%m/%d/%Y') AS FirstSession, GraduationDate, TimeCommitment, isTA, isGrader, CurrentEmployer, WorkHours, isWorkedASU FROM Application INNER JOIN User_ ON Application.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var AppInfo = {
                    'EducationLevel'          : rows[0].EducationLevel,
                    'DegreeProgram'           : rows[0].DegreeProgram,
                    'isFourPlusOne'           : rows[0].isFourPlusOne,
                    'GPA'                     : rows[0].GPA,
                    'isInternationalStudent'  : rows[0].isInternationalStudent,
                    'SpeakTest'               : rows[0].SpeakTest,
                    'FirstSession'            : rows[0].FirstSession,
                    'GraduationDate'          : rows[0].GraduationDate,
                    'TimeCommitment'          : rows[0].TimeCommitment,
                    'isTA'                    : rows[0].isTA,
                    'isGrader'                : rows[0].isGrader,
                    'CurrentEmployer'         : rows[0].CurrentEmployer,
                    'WorkHours'               : rows[0].WorkHours,
                    'isWorkedASU'             : rows[0].isWorkedASU}; 
                   
                var response = JSON.stringify(AppInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student Languages Table
router.post('/languagesTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT isLanguage, LanguageLevel, OtherLanguage, OtherLevel FROM Languages INNER JOIN User_ ON Languages.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var LanguageInfo = [];
                for (var i = 0; i < rows.length; i++) {
                    var Languages  = {
                    'isLanguage'    : rows[i].isLanguage,
                    'LanguageLevel' : rows[i].LanguageLevel,
                    'OtherLanguage' : rows[i].OtherLanguage,
                    'OtherLevel'    : rows[i].OtherLevel}; 
                    LanguageInfo.push(Languages);
                }   
                var response = JSON.stringify(LanguageInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student IDE Table
router.post('/ideTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT isIDE, OtherIDE FROM IDEs INNER JOIN User_ ON IDEs.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var IDEInfo = [];
                for (var i = 0; i < rows.length; i++) {
                    var IDEs  = {
                    'isIDE'    : rows[i].isIDE,
                    'OtherIDE' : rows[i].OtherIDE}; 
                    IDEInfo.push(IDEs);
                }   
                var response = JSON.stringify(IDEInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student Collaborative Tools Table
router.post('/toolsTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT isTool, OtherTool FROM Collaborative_Tools INNER JOIN User_ ON Collaborative_Tools.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var ToolInfo = [];
                for (var i = 0; i < rows.length; i++) {
                    var Tools  = {
                    'isTool'    : rows[i].isTool,
                    'OtherTool' : rows[i].OtherTool}; 
                    ToolInfo.push(Tools);
                }   
                var response = JSON.stringify(ToolInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student Course Competencies Table
router.post('/coursesTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT isCourse, isPrefer, isQualified, isPreviouslyTA, isPreviouslyGrader, OtherCourse, isOtherPrefer, isOtherQualified, isOtherPreviouslyTA, isOtherPreviouslyGrader FROM Course_Competencies INNER JOIN User_ ON Course_Competencies.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var CourseInfo = [];
                for (var i = 0; i < rows.length; i++) {
                    var Courses  = {
                    'isCourse'                : rows[i].isCourse,
                    'isPrefer'                : rows[i].isPrefer,
                    'isQualified'             : rows[i].isQualified,
                    'isPreviouslyTA'          : rows[i].isPreviouslyTA,
                    'isPreviouslyGrader'      : rows[i].isPreviouslyGrader,
                    'OtherCourse'             : rows[i].OtherCourse,
                    'isOtherPrefer'           : rows[i].isOtherPrefer,
                    'isOtherQualified'        : rows[i].isOtherQualified,
                    'isOtherPreviouslyTA'     : rows[i].isOtherPreviouslyTA,
                    'isOtherPreviouslyGrader' : rows[i].isOtherPreviouslyGrader}; 
                    CourseInfo.push(Courses);
                }   
                var response = JSON.stringify(CourseInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student Calendar Table
router.post('/calendarTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT CalendarDay, TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar INNER JOIN User_ ON Calendar.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var CalendarInfo = [];
                for (var i = 0; i < rows.length; i++) {
                    var Calendar  = {
                    'CalendarDay' : rows[i].CalendarDay,
                    'StartHour'   : rows[i].StartHour,
                    'StopHour'    : rows[i].StopHour}; 
                    CalendarInfo.push(Calendar);
                }   
                var response = JSON.stringify(CalendarInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// Student Attachment Table
router.post('/attachmentTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT IposName, TranscriptName, ResumeName, DATE_FORMAT(IposUploadDate, '%m/%d/%Y') AS IposUploadDate, DATE_FORMAT(TranscriptUploadDate, '%m/%d/%Y') AS TranscriptUploadDate, DATE_FORMAT(ResumeUploadDate, '%m/%d/%Y') AS ResumeUploadDate, Attachment.ASURITE_ID FROM Attachment INNER JOIN User_ ON Attachment.ASURITE_ID = User_.ASURITE_ID WHERE concat(FirstName, ' ', LastName) = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                    var AttachmentInfo  = {
                    'ResumeName'           : rows[0].ResumeName,
                    'ResumeUploadDate'     : rows[0].ResumeUploadDate,  
                    'TranscriptName'       : rows[0].TranscriptName,
                    'TranscriptUploadDate' : rows[0].TranscriptUploadDate,
                    'IposName'             : rows[0].IposName,
                    'IposUploadDate'       : rows[0].IposUploadDate,
                    'ASURITE_ID'           : rows[0].ASURITE_ID}; 
                   
                var response = JSON.stringify(AttachmentInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

// View Student's Resume
router.post('/resume', function(req, res) {
    var Resume = '../userUploads/attachments/' + req.body.ID + '/resume/' + req.body.fileName;
    fs.readFile(Resume, function (err, data) {
        res.contentType('application/pdf');
        res.send(data);
    });
});

// View Student's Transcript
router.post('/transcript', function(req, res) {
    var Transcript = '../userUploads/attachments/' + req.body.ID + '/transcript/' + req.body.fileName;
    fs.readFile(Transcript, function (err, data) {
        res.contentType('application/pdf');
        res.send(data);
    });
});

// View Student's iPOS
router.post('/ipos', function(req, res) {
    var Ipos = '../userUploads/attachments/' + req.body.ID + '/ipos/' + req.body.fileName;
    fs.readFile(Ipos, function (err, data) {
        res.contentType('application/pdf');
        res.send(data);
    });
});

// Student Evaluation Table
router.post('/evaluationTable', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT DATE_FORMAT(DateCreated, '%m/%d/%Y') AS DateCreated, InstructorName, QOneScore, QOneComments, QTwoScore, QTwoComments, QThreeScore, QThreeComments, QFourScore, QFourComments FROM Student_Evaluation WHERE StudentName = ?", [req.body.studentName], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var EvalInfo = [];
                for (var i = 0; i < rows.length; i++) {
                    var Evals  = {
                    'DateCreated'    : rows[i].DateCreated,
                    'InstructorName' : rows[i].InstructorName,
                    'QOneScore'      : rows[i].QOneScore,
                    'QOneComments'   : rows[i].QOneComments,
                    'QTwoScore'      : rows[i].QTwoScore,
                    'QTwoComments'   : rows[i].QTwoComments,
                    'QThreeScore'    : rows[i].QThreeScore,
                    'QThreeComments' : rows[i].QThreeComments,
                    'QFourScore'     : rows[i].QFourScore,
                    'QFourComments'  : rows[i].QFourComments}; 
                    EvalInfo.push(Evals);
                }   
                var response = JSON.stringify(EvalInfo);
                res.send(response);
            } 
            connection.release();
        });
    });
});

module.exports = router;
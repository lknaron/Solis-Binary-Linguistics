/*
 * File: facultyRouter.js
 * Description: Processes all requests routed from the server made to faculty
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

// Get all Students in Database
router.post('/applicationNames', function(req, res) {
    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        }
        connection.query("SELECT concat(FirstName, ' ', LastName) Name From User_ INNER JOIN Application ON User_.ASURITE_ID = Application.ASURITE_ID WHERE AppStatus = 'complete'", [req.body.course], function(err2, rows) {
            if(err2) {
                console.log('Error performing query: ' + err2);
                throw err2;
            } else if (!rows.length) {
                res.sendStatus(200);
            } else if (rows[0]) {
                var Students = [];
                for (var i = 0; i < rows.length; i++) {
                     var FullName = {
                    'Name' : rows[i].Name}; 
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
    var Resume = '../../attachments/' + req.body.ID + '/resume/' + req.body.fileName;
    fs.readFile(Resume, function (err, data) {
        res.contentType('application/pdf');
        res.send(data);
    });
});

// View Student's Transcript
router.post('/transcript', function(req, res) {
    var Transcript = '../../attachments/' + req.body.ID + '/transcript/' + req.body.fileName;
    fs.readFile(Transcript, function (err, data) {
        res.contentType('application/pdf');
        res.send(data);
    });
});

// View Student's iPOS
router.post('/ipos', function(req, res) {
    var Ipos = '../../attachments/' + req.body.ID + '/ipos/' + req.body.fileName;
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
        connection.query("SELECT DATE_FORMAT(DateCreated, '%m/%d/%Y') AS DateCreated, QOneScore, QOneComments, QTwoScore, QTwoComments, QThreeScore, QThreeComments, QFourScore, QFourComments FROM Student_Evaluation WHERE StudentName = ?", [req.body.studentName], function(err2, rows) {
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
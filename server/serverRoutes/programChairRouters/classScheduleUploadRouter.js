/*
 * File: employmentResumeUploadRouter.js
 * Description: Processes all requests routed from the server made to /employmentResumeUploadRouter
 */

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require("fs");
var multer  = require('multer');

var csv = require('fast-csv');

// Invoked for any request passed to this router
router.use(function(req, res, next) {
    next();
});

// Set up storage of user resume attachment in file system
var storage = multer.diskStorage({
    destination : function(req,file,cb){
        var schedulePath = '../../schedule';
        try {
            if (!fs.existsSync(schedulePath)) {
                fs.mkdirSync(schedulePath);
            } else {
                try { 
                    var files = fs.readdirSync(schedulePath); 
                }
                catch(e) {
                }
                if (files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        var filePath = schedulePath + '/' + files[i];
                        if (fs.statSync(filePath).isFile()) {
                            fs.unlinkSync(filePath);
                        }
                    }
                }
            }
        } catch(e) {
            console.log(e);
        }
        cb(null, schedulePath);
    },
    filename : function (req, file, cb) {
        cb(null, file.originalname)
    }
});

router.use(multer({storage : storage}).any());

//  Create mysql connection pool
var mysql_pool  = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : 'root',
    password        : 'sblpass1',
    database        : 'sblDB'
});

// Save attachment information into database
router.post('/', function(req, res) {
    var row = [];
    var inputFile='../../schedule/' + req.files[0].originalname;

    mysql_pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            console.log('Error getting mysql_pool connection: ' + err);
            throw err;
        } else {
            connection.query('DELETE FROM Schedule_',  function(err2, rows) {
                if(err2) {
                    console.log('Error performing query: ' + err2);
                    throw err2;
                } else {
                    fs.createReadStream(inputFile)
                        .pipe(csv())
                        .on('data', function(data) {
                            var temp = [];
                            temp.push(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11]);
                            row.push(temp)
                        })
                        .on('end', function(data) {
                            row.splice(0, 1);
                            for (var i = 0; i < row.length; i++) {
                                for (var j = 0; j < row[i].length; j++) {
                                    if (row[i][j] == '') {
                                        row[i][j] = null;
                                    } else if (j === 3 || j === 4) {
                                        row[i][j] = parseInt(row[i][j]);

                                    } else if (j === row[i].length - 1) {
                                        row[i][j] = parseInt(row[i][j]);
                                    }
                                }
                                row[i].splice(11, 0, "Incomplete", 0, 0)
                                if (i === row.length - 1) {
                                    connection.query('INSERT INTO Schedule_ (SessionIs, Location, Subject, CatalogNumber, CourseNumber, CourseTitle, Days, StartHours, EndHours, FirstName, LastName, AssignedStatus, TARequiredHours, GraderRequiredHours, EnrollmentNumPrev) VALUES ?', [row], function(err3) { 
                                        if(err3) {
                                            console.log('Error performing query: ' + err3);
                                            //throw err3;
                                            res.send({error : 1});
                                        } else {
                                            res.sendStatus(200);
                                        }
                                    });
                                }
                            }

                        });
                }
            });
        }
        connection.release();
    });
});

module.exports = router;
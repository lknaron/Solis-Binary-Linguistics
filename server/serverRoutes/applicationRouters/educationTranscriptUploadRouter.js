/*
 * File: educationTranscriptUploadRouter.js
 * Description: Processes all requests routed from the server made to /education/TranscriptUploadRouter
 */

var express  = require('express');
var router = express.Router();
var mysql = require('mysql');
var fs = require("fs");
var multer  = require('multer');

// Invoked for any request passed to this router
router.use(function(req, res, next) {
    next();
});

// Set up storage of user transcript attachment in file system
var storage = multer.diskStorage({
    destination : function(req,file,cb){
        var attachmentsPath = './userUploads/attachments/';
        var userPath = './userUploads/attachments/' + req.user.username;
        var transcriptPath = './userUploads/attachments/' + req.user.username + '/transcript';
        try {
            if (!fs.existsSync(attachmentsPath)) {
                fs.mkdirSync(attachmentsPath);
            }
            if (!fs.existsSync(userPath)) {
                fs.mkdirSync(userPath);
            } 
            if (!fs.existsSync(transcriptPath)) {
                fs.mkdirSync(transcriptPath);
            } else {
                try { 
                    var files = fs.readdirSync(transcriptPath); 
                }
                catch(e) {
                }
                if (files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        var filePath = transcriptPath + '/' + files[i];
                        if (fs.statSync(filePath).isFile()) {
                            fs.unlinkSync(filePath);
                        }
                    }
                }
            }
        } catch(e) {
            console.log(e);
        }
        cb(null, transcriptPath);
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

// Save transcript attachment information in database
router.post('/', function(req, res) {
    var uploadTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    if (req.files) {
        mysql_pool.getConnection(function(err, connection) {
            if (err) {
                connection.release();
                console.log('Error getting mysql_pool connection: ' + err);
                throw err;
            } else {
                connection.query('SELECT TranscriptName FROM Attachment WHERE ASURITE_ID = ?', [req.user.username], function(err2, rows) {
                    if(err2) {
                        console.log('Error performing query: ' + err2);
                        throw err2;
                    } else if (!rows.length) {
                        connection.query('INSERT INTO Attachment (TranscriptName, TranscriptUploadDate, ASURITE_ID) VALUES (?, ?, ?)', [req.files[0].originalname, uploadTime, req.user.username], function(err3) { 
                            if(err3) {
                                console.log('Error performing query: ' + err3);
                                throw err3;
                            }
                        });
                    } else {
                        connection.query('UPDATE Attachment SET TranscriptName = ?, TranscriptUploadDate = ? WHERE ASURITE_ID = ?', [req.files[0].originalname, uploadTime, req.user.username], function(err4) { 
                            if(err4) {
                                console.log('Error performing query: ' + err4);
                                throw err4;
                            }
                        });
                    }
                });
            }
        connection.release();
        });
    }
    res.sendStatus(200);
});

module.exports = router;
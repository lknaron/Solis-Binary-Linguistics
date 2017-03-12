/*
 * File: index.js
 * Description: Creates server and routes requests
 */

'use strict'

var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser'),
    expressJWT = require('express-jwt'),
    jwt = require('jsonwebtoken'),
    favicon = require('serve-favicon'),
    directoryToServe = 'client',
    https = require('https'),
    port = 3443;

var app = express();

// Directs to client folder to serve static files
app.use('/', express.static(path.join(__dirname, '..', directoryToServe)));

// Directs to angular modules to have modules stored locally
app.use('/angular', express.static(path.join(__dirname, '..', 'node_modules/angular')));
app.use('/angular-route', express.static(path.join(__dirname, '..', 'node_modules/angular-route')));

// Use body Parser for reading sent data
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Use JWT for token authorization
app.use(expressJWT({secret:'sblapp123'}).unless({path:['/', '/login', '/createAccount', '/favicon.ico']})); // token secret - not needed for 'unless' routes

// Set up favicon
app.use(favicon(path.join(__dirname, '../client/assets/images', 'asufavicon.ico')));

// Maybe create a seperate file for the routers or other app.use paths and body parser
// Request routers
var logInRouter = require('./serverRoutes/logInRouter/logInRouter.js'),
    createAccountRouter = require('./serverRoutes/createAccountRouter/createAccountRouter.js'),
    contactInfoRouter = require('./serverRoutes/applicationRouters/contactInfoRouter.js'),
    educationRouter = require('./serverRoutes/applicationRouters/educationRouter.js'),
    educationIposUploadRouter = require('./serverRoutes/applicationRouters/educationIposUploadRouter.js'),
    educationTranscriptUploadRouter = require('./serverRoutes/applicationRouters/educationTranscriptUploadRouter.js'),
    employmentRouter = require('./serverRoutes/applicationRouters/employmentRouter.js'), 
    employmentResumeUploadRouter = require('./serverRoutes/applicationRouters/employmentResumeUploadRouter.js'),
    availabilityRouter = require('./serverRoutes/applicationRouters/availabilityRouter.js'),
    languagesRouter = require('./serverRoutes/applicationRouters/languagesRouter.js'),
    coursesRouter = require('./serverRoutes/applicationRouters/coursesRouter.js'),
    programChairRouter = require('./serverRoutes/programChairRouters/programChairRouter.js');

// Use ssl certificate and key
var httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
};

// Create https server
https.createServer(httpsOptions, app).listen(port, function () {
    console.log('Server running at https://sbltest.ddns.net');
});

//  Send requests to correct router
app.use('/login', logInRouter);
app.use('/createAccount', createAccountRouter);
app.use('/contactInfo', contactInfoRouter);
app.use('/contactInfo/getContactInfo', contactInfoRouter);
app.use('/education', educationRouter);
app.use('/iposUpload', educationIposUploadRouter);
app.use('/transcriptUpload', educationTranscriptUploadRouter);
app.use('/education/getEducationInfo', educationRouter);
app.use('/education/getIposInfo', educationRouter);
app.use('/education/getTranscriptInfo', educationRouter);
app.use('/employment', employmentRouter);
app.use('/employment/getEmploymentInfo', employmentRouter);
app.use('/employment/getResumeInfo', employmentRouter);
app.use('/resumeUpload', employmentResumeUploadRouter);
app.use('/availability', availabilityRouter);
app.use('/availability/getAvailabilityInfo', availabilityRouter);
app.use('/languages', languagesRouter);
app.use('/languages/getLanguagesInfo', languagesRouter);
app.use('/courses', coursesRouter);
app.use('/courses/getCoursesInfo', coursesRouter);
app.use('/programChair', programChairRouter);
app.use('/programChair/getClassNames', programChairRouter);
app.use('/programChair/getClassInfo', programChairRouter);
app.use('/programChair/getStudentNameHours', programChairRouter);
app.use('/programChair/updateEnrollment', programChairRouter);
app.use('/programChair/updateStatus', programChairRouter);
app.use('/programChair/updateRequiredHours', programChairRouter);
app.use('/programChair/updateAssignedStudents', programChairRouter);
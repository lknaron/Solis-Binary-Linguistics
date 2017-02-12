/*
 * File: index.js
 * Description: Creates server and routes requests
 */

'use strict'

var express = require('express'),
    fs = require('fs'),
    //https = require('https'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser');

var app = express();
var directoryToServe = 'client';
var port = 3443;

// Directs to client folder to serve static files
app.use('/', express.static(path.join(__dirname, '..', directoryToServe)));

// Directs to angular modules to have modules stored locally
app.use('/angular', express.static(path.join(__dirname, '..', 'node_modules/angular')));
app.use('/angular-route', express.static(path.join(__dirname, '..', 'node_modules/angular-route')));

// Use body Parser for reading sent data
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Maybe create a seperate file for the routers or other app.use paths and body parser
// Request routers
var logInRouter = require('./serverRoutes/logInRouter/logInRouter.js');
var createAccountRouter = require('./serverRoutes/createAccountRouter/createAccountRouter.js');
var contactInfoRouter = require('./serverRoutes/applicationRouters/contactInfoRouter.js');
var educationRouter = require('./serverRoutes/applicationRouters/educationRouter.js');  
var employmentRouter = require('./serverRoutes/applicationRouters/employmentRouter.js'); 
var availabilityRouter = require('./serverRoutes/applicationRouters/availabilityRouter.js');
var languagesRouter = require('./serverRoutes/applicationRouters/languagesRouter.js');
var coursesRouter = require('./serverRoutes/applicationRouters/coursesRouter.js');

/*// Use ssl certificate and key
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
};

// Create https server
https.createServer(httpsOptions, app).listen(port, function () {
    console.log(`Server running at https://localhost:${port}`);
});*/

//  Running http server until we get SSL certificates
http.createServer(app).listen(port, function () {
    console.log("Server Running at https://192.168.1.100:3443");
});

//  Send requests to correct router
app.use('/login', logInRouter);
app.use('/createAccount', createAccountRouter);
app.use('/contactInfo', contactInfoRouter);
app.use('/contactInfo/getContactInfo', contactInfoRouter);
app.use('/education', educationRouter);
app.use('/education/getEducationInfo', educationRouter);
app.use('/employment', employmentRouter);
app.use('/employment/getEmploymentInfo', employmentRouter);
app.use('/availability', availabilityRouter);
app.use('/availability/getAvailabilityInfo', availabilityRouter);
app.use('/languages', languagesRouter);
app.use('/languages/getLanguagesInfo', languagesRouter);
app.use('/courses', coursesRouter);
app.use('/courses/getCoursesInfo', coursesRouter);
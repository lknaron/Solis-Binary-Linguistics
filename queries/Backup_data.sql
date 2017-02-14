-- Backup Database to Text File

-- Write User Table
SELECT * FROM User_ INTO OUTFILE '/database/user.txt';

-- Load User Table
LOAD DATA LOCAL INFILE '/database/user.txt' INTO TABLE User_;

-- Write Offer Table
SELECT * FROM Offer INTO OUTFILE '/database/offer.txt';

-- Load User Table
LOAD DATA LOCAL INFILE '/database/offer.txt' INTO TABLE offer;

-- Write Student Evaluation Table
SELECT * FROM Student_Evaluation INTO OUTFILE '/database/student_evalution.txt';

-- Load Student Evalution Table
LOAD DATA LOCAL INFILE '/database/student_evalution.txt' INTO TABLE Student_Evaluation;

-- Write Schedule Table
SELECT * FROM Schedule INTO OUTFILE '/database/schedule.txt';

-- Load Schedule Table
LOAD DATA LOCAL INFILE '/database/schedule.txt' INTO TABLE Schedule;

-- Write Request Table
SELECT * FROM Student_Request INTO OUTFILE '/database/student_request.txt';

-- Load Request Table
LOAD DATA LOCAL INFILE '/database/student_request.txt' INTO TABLE Student_Request;

-- Write Placement Table
SELECT * FROM Placement INTO OUTFILE '/database/placement.txt';

-- Load Placement Table
LOAD DATA LOCAL INFILE '/database/placement.txt' INTO TABLE Placement;

-- Write Application Table
SELECT * FROM Application INTO OUTFILE '/database/application.txt';

-- Load Application Table
LOAD DATA LOCAL INFILE '/database/application.txt' INTO TABLE Application;

-- Write Calendar Table
SELECT * FROM Calendar INTO OUTFILE '/database/calendar.txt';

-- Load Calendar Table
LOAD DATA LOCAL INFILE '/database/calendar.txt' INTO TABLE Calendar;

-- Write Attachment Table
SELECT * FROM Attachment INTO OUTFILE '/database/attachment.txt';

-- Load Attachment Table
LOAD DATA LOCAL INFILE '/database/attachment.txt' INTO TABLE Attachment;

-- Write Languages Tables
SELECT * FROM Languages INTO OUTFILE '/database/languages.txt';

-- Load Languages Table
LOAD DATA LOCAL INFILE '/database/languages.txt' INTO TABLE Languages;

-- Write IDEs Table
SELECT * FROM IDEs INTO OUTFILE '/database/ides.txt';

-- Load IDEs Table
LOAD DATA LOCAL INFILE '/database/ides.txt' INTO TABLE IDEs;

-- Write Collaborative Tools Table
SELECT * FROM Collaborative_Tools INTO OUTFILE '/database/collaborative_tools.txt';

-- Load Collaborative Tools Table
LOAD DATA LOCAL INFILE '/database/collaborative_tools.txt' INTO TABLE Collaborative_Tools;

-- Write Course Competencies Table
SELECT * FROM Course_Competencies INTO OUTFILE '/database/course_competencies.txt';

-- Load Course Competencies Table
LOAD DATA LOCAL INFILE '/database/course_competencies.txt' INTO TABLE Course_Competencies;

-- Write Courses Taught Table
SELECT * FROM Courses_Taught INTO OUTFILE '/database/courses_taught.txt';

-- Load Courses Taught Table
LOAD DATA LOCAL INFILE '/database/courses_taught.txt' INTO TABLE Courses_Taught;
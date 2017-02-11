-- Sample Data

-- -----------------------------------------------------
-- User Table
-- -----------------------------------------------------
INSERT INTO User_ (ASURITE_ID, FirstName, MiddleName, LastName, UserEmail, UserPassword, 
UserRole, RegTime, isActive, LoginTime) VALUES
('ballen', 'Bartholomew', 'Henry', 'Allen', 'ballen@asu.edu', 'password', 'student', 
'2017-01-02 00:00:01', 1, '2017-01-02 00:01:23'),
('oqueen', 'Oliver', 'Jonas', 'Queen', 'oqueen@asu.edu', 'password2', 'student', 
'2017-01-05 00:00:05', 1, '2017-01-05 00:04:33'),
('jgrey', 'Jean', 'Elaine', 'Grey', 'jgrey@asu.edu', 'password3', 'student', 
'2017-01-03 00:00:45', 1, '2017-01-03 00:2:08'),
('cxavier', 'Charles', 'Francis', 'Xavier', 'cxavier@asu.edu', 'password4', 
'program chair', '2017-01-02 00:01:15', 1, '2017-01-02 00:02:03'),
('ahelsing', 'Abraham', 'Van', 'Helsing', 'ahelsing@asu.edu', 'password5', 'faculty', 
'2017-01-02 00:00:55', 1, '2017-01-02 00:01:48'),
('hmccoy', 'Henry', 'Philip', 'McCoy', 'hmccoy@asu.edu', 'password6', 'faculty', 
'2017-01-01 00:02:03', 1, '2017-01-01 00:03:23'),
('rbanner', 'Robert', 'Bruce', 'Banner', 'rbanner@asu.edu', 'password7', 'faculty', 
'2017-01-03 00:12:11', 1, '2017-01-03 00:15:05'),
('fsmoak', 'Felicity', 'Megan', 'Smoak', 'fsmoak@asu.edu', 'password8', 'administrative', 
'2017-01-02 00:08:23', 1, '2017-01-02 00:10:13'),
('astark', 'Anthony', 'Edward', 'Stark', 'astark@asu.edu', 'password9', 'human resources',
'2017-01-02 00:16:45', 1, '2017-01-02 00:18:03');

-- -----------------------------------------------------
-- Application Table
-- -----------------------------------------------------
INSERT INTO Application (AppID, PhoneNumber, MobileNumber, AddressOne, AddressTwo, 
AddressCountry, AddressCity, AddressState, AddressZip, EducationLevel, GPA, DegreeProgram,
isAcademicProbation, isFourPlusOne, isInternationalStudent, SpeakTest, FirstSession,
GraduationDate, TimeCommitment, isTA, isGrader, CurrentEmployer, WorkHours, AppStatus,
DateCreated, DateSubmitted, ModifiedDate, LastSaved, ASURITE_ID) VALUES
(1, '123-111-1111', '123-222-2222', '123 First Street', NULL, 'United States', 
'Central City', 'Missouri', 10001, 'Ph.D Computer Engineering', 4.2, 
'Electrical Engineering', 0, 0, 0, NULL, '2016-08-15', 'Spring 2020', '10 hours per week', 
1, 0, NULL, NULL, 'incomplete', '2017-01-03 00:12:32', NULL, NULL, '/availability', 'ballen'),
(2, '231-232-1111', '231-222-2222', '1282 Washington Avenue', NULL, 'United States', 
'Star City', 'California', 20020, 'Ph.D Computer Science', 3.8, 'Computer Science', 0,
0, 0, NULL, '2014-08-15', 'Spring 2018', '20 hours per week', 1, 0, NULL, NULL, 
'incomplete', '2017-01-05 23:45:08', NULL, NULL, '/education', 'oqueen'),
(3, '342-443-1341', '342-234-1322', '1407 Graymalkin Lane', NULL, 'United States', 
'Salem Center', 'New York', 10501, 'M.S. Computer Engineering', 2.8, 'Computer Science', 1,
1, 1, 250, '2012-08-15', 'Spring 2017', '10 hours per week', 0, 1, NULL, NULL, 
'incomplete', '2017-01-04 08:23:16', NULL, '2017-01-06 12:05:46', '/employment', 'jgrey');

-- -----------------------------------------------------
-- IDEs Table
-- -----------------------------------------------------
INSERT INTO IDEs (IDEid, isAndroidStudio, isBrackets, isIntelliJ, isNetBeans, isXcode,
Other, ASURITE_ID) VALUES
(1, 1, 1, 1, 1, 1, 'Eclipse', 'ballen'),
(2, 0, 1, 1, 1, 0, 'Eclipse', 'oqueen'),
(3, 1, 1, 0, 1, 0, NULL, 'jgrey');

-- -----------------------------------------------------
-- Collaborative Tools Table
-- -----------------------------------------------------
INSERT INTO Collaborative_Tools (ToolID, isGitHub, isTaiga, isSlack, Other, ASURITE_ID) VALUES
(1, 1, 1, 1, 'Skype', 'ballen'),
(2, 1, 1, 1, 'Skype', 'oqueen'),
(3, 1, 0, 1, NULL, 'jgrey');

-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------
INSERT INTO Course_Competencies (CompetenciesID, isCSE110, isCSE205, isCSE230, isCSE240, 
isCSE120, isFSE100, isASU101, isSER422, isSER450, isSER456, isSER486, isSER332, isSER431, 
isSER432, isSER515, isSER516, isSER501, isSER502, isSER517, isSER518, isCSE563, isCSE564,
isCSE566, isSER215, isSER216, isSER222, isSER315, isSER316, isSER321, isSER322, isSER334,
isSER401, isSER402, isSER415, isSER416, isSER421, isSER423, Other, ASURITE_ID) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
1, 1, 1, 1, 1, 1, 1, 1, NULL, 'ballen'),
(2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0,
1, 1, 1, 1, 1, 1, 1, 1, NULL, 'oqueen');

-- -----------------------------------------------------
-- Courses Taught Table
-- -----------------------------------------------------
INSERT INTO Courses_Taught (TaughtID, isCSE110, isCSE205, isCSE230, isCSE240, 
isCSE120, isFSE100, isASU101, isSER422, isSER450, isSER456, isSER486, isSER332, isSER431, 
isSER432, isSER515, isSER516, isSER501, isSER502, isSER517, isSER518, isCSE563, isCSE564,
isCSE566, isSER215, isSER216, isSER222, isSER315, isSER316, isSER321, isSER322, isSER334,
isSER401, isSER402, isSER415, isSER416, isSER421, isSER423, Other, ASURITE_ID) VALUES
(1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, NULL, 'ballen');

-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------
INSERT INTO Languages (LanguagesID, isC, CLevel, isCSharp, CSharpLevel, isCPlusPlus, 
CPlusPlusLevel, isCSS, CSSLevel, isHTML, HTMLLevel, isJava, JavaLevel, isJavascript,
JavascriptLevel, isJSON, JSONLevel, isScheme, SchemeLevel, isPHP, PHPLevel, isPLP, 
PLPLevel, isProlog, PrologLevel, isPython, PythonLevel, isSQL, SQLLevel, isSwift, 
SwiftLevel, isVerilog, VerilogLevel, isXML, XMLLevel, Other, ASURITE_ID) VALUES
(1, 1, 'Proficient', 1, 'Proficient', 1, 'Expert', 1, 'Expert', 1, 'Expert', 1, 
'Proficient', 1, 'Proficient', 1, 'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 
'Expert', 1, 'Proficient', 1, 'Proficient', 1, 'Novice', 1, 'Expert', 1, 'Expert', NULL, 'ballen'),
(2, 1, 'Proficient', 1, 'Proficient', 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 
'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 
'Expert', 0, NULL, 1, 'Proficient', 1, 'Novice', 1, 'Novice', 1, 'Novice', NULL, 'oqueen'),
(3, 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 
'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 
'Expert', 0, NULL, 1, 'Proficient', 1, 'Novice', 0, NULL, 0, NULL, NULL, 'jgrey');

-- -----------------------------------------------------
-- Attachment Table
-- -----------------------------------------------------
INSERT INTO Attachment (AttachmentID, AttachmentName, AttachmentType, AttachmentSize,
UploadDate, ASURITE_ID) VALUES
(1, 'Barry Allen Resume', 'PDF', 131, '2017-01-03 11:35:18', 'ballen'),
(2, 'Barry Allen Transcript', 'PDF', 162, '2017-01-03 11:55:42', 'ballen');

-- -----------------------------------------------------
-- Calendar Table
-- -----------------------------------------------------
INSERT INTO Calendar (CalendarID, CalendarName, CalendarDay, StartHour, StopHour, ASURITE_ID) VALUES
(1, 'Summer Semester', 'Monday', '08:00:00', '09:00:00', 'ballen'), 
(2, 'Summer Semester', 'Monday', '09:00:00', '10:00:00', 'ballen'),
(3, 'Summer Semester', 'Monday', '13:00:00', '14:00:00', 'ballen'),
(4, 'Summer Semester', 'Monday', '14:00:00', '15:00:00', 'ballen'),
(5, 'Summer Semester', 'Wednesday', '08:00:00', '09:00:00', 'ballen'), 
(6, 'Summer Semester', 'Wednesday', '09:00:00', '10:00:00', 'ballen'),
(7, 'Summer Semester', 'Wednesday', '13:00:00', '14:00:00', 'ballen'),
(8, 'Summer Semester', 'Wednesday', '14:00:00', '15:00:00', 'ballen');

-- -----------------------------------------------------
-- Offer Table
-- -----------------------------------------------------
INSERT INTO Offer (OfferID, isOfferAccept, ASURITE_ID) VALUES
(1, NULL, 'ballen'),
(2, NULL, 'oqueen');

-- -----------------------------------------------------
-- Student Evaluation Table
-- -----------------------------------------------------
INSERT INTO Student_Evaluation (EvaluationID, DateCreated, QOneScore, QOneComments, 
QTwoScore, QTwoComments, QThreeScore, QThreeComments, QFourScore, QFourComments, 
ASURITE_ID_1, ASURITE_ID_2) VALUES
(1, '2017-01-12 13:05:11', 4, 'Great job on feedback.', 4, 'Always on time.', 4, 
"Always answered student's questions in class and after class.", 4, 'Overall great job.', 
'rbanner','ballen');

-- -----------------------------------------------------
-- Schedule Table
-- -----------------------------------------------------
INSERT INTO Schedule_ (ScheduleID, SessionIs, Location, Subject, CatalogNumber, CourseNumber, 
CourseTitle, Units, Days, StartHours, EndHours, FirstName, LastName) VALUES
(1, 'A', 'ASUOnline', 'SER', 100, 10201, 'Object-Oriented Software', 3, NULL, NULL, NULL,
'Abraham', 'Helsing');

-- -----------------------------------------------------
-- Student Request Table
-- -----------------------------------------------------
INSERT INTO Student_Request (RequestID, DateCreated, ScheduleID, ASURITE_ID) VALUES
(1, '2017-01-10 11:28:01', 1, 'ballen');

-- -----------------------------------------------------
-- Placement Table
-- -----------------------------------------------------
INSERT INTO Placement (PlaceID, EnrollmentNumPrev, EnrollmentNumCurrent, EnrollmentDiff, 
TA, GraderOne, GraderTwo, TAHours, GraderOneHours, GraderTwoHours, ScheduleID) VALUES
(1, 40, 50, 10, 'Barry Allen', 'Oliver Queen', NULL, 10, 10, NULL, 1);
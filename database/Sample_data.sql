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
Other, AppID) VALUES
(1, 1, 1, 1, 1, 1, 'Eclipse', 1),
(2, 0, 1, 1, 1, 0, 'Eclipse', 2),
(3, 1, 1, 0, 1, 0, NULL, 3);

-- -----------------------------------------------------
-- Collaborative Tools Table
-- -----------------------------------------------------
INSERT INTO Collaborative_Tools (ToolID, isGitHub, isTaiga, isSlack, Other, AppID) VALUES
(1, 1, 1, 1, 'Skype', 1),
(2, 1, 1, 1, 'Skype', 2),
(3, 1, 0, 1, NULL, 3);

-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------
INSERT INTO Course_Competencies (CompetenciesID, isCSE110, isCSE205, isCSE230, isCSE240, 
isCSE120, isFSE100, isASU101, isSER422, isSER450, isSER456, isSER486, isSER332, isSER431, 
isSER432, isSER515, isSER516, isSER501, isSER502, isSER517, isSER518, isCSE563, isCSE564,
isCSE566, isSER215, isSER216, isSER222, isSER315, isSER316, isSER321, isSER322, isSER334,
isSER401, isSER402, isSER415, isSER416, isSER421, isSER423, Other, AppID) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
1, 1, 1, 1, 1, 1, 1, 1, NULL, 1),
(2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0,
1, 1, 1, 1, 1, 1, 1, 1, NULL, 2);

-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------
INSERT INTO Languages (LanguagesID, isC, CLevel, isCSharp, CSharpLevel, isCPlusPlus, 
CPlusPlusLevel, isCSS, CSSLevel, isHTML, HTMLLevel, isJava, JavaLevel, isJavascript,
JavascriptLevel, isJSON, JSONLevel, isScheme, SchemeLevel, isPHP, PHPLevel, isPLP, 
PLPLevel, isProlog, PrologLevel, isPython, PythonLevel, isSQL, SQLLevel, isSwift, 
SwiftLevel, isVerilog, VerilogLevel, isXML, XMLLevel, Other, AppID) VALUES
(1, 1, 'Proficient', 1, 'Proficient', 1, 'Expert', 1, 'Expert', 1, 'Expert', 1, 
'Proficient', 1, 'Proficient', 1, 'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 
'Expert', 1, 'Proficient', 1, 'Proficient', 1, 'Novice', 1, 'Expert', 1, 'Expert', NULL, 1),
(2, 1, 'Proficient', 1, 'Proficient', 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 
'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 
'Expert', 0, NULL, 1, 'Proficient', 1, 'Novice', 1, 'Novice', 1, 'Novice', NULL, 2),
(3, 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 'Novice', 1, 
'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 
'Expert', 0, NULL, 1, 'Proficient', 1, 'Novice', 0, NULL, 0, NULL, NULL, 3);

-- -----------------------------------------------------
-- Attachment Table
-- -----------------------------------------------------
INSERT INTO Attachment (AttachmentID, AttachmentName, AttachmentType, AttachmentSize,
UploadDate, AppID) VALUES
(1, 'Barry Allen Resume', 'PDF', 131, '2017-01-03 11:35:18', 1),
(2, 'Barry Allen Transcript', 'PDF', 162, '2017-01-03 11:55:42', 1);

-- -----------------------------------------------------
-- Calendar Table
-- -----------------------------------------------------
INSERT INTO Calendar (CalendarID, CalendarName, CalendarDay, StartHour, StopHour, AppID) VALUES
(1, 'Current Semester', 'Monday', '08:00:00', '09:00:00', 1), 
(2, 'Current Semester', 'Monday', '09:00:00', '10:00:00', 1),
(3, 'Current Semester', 'Monday', '13:00:00', '14:00:00', 1),
(4, 'Current Semester', 'Monday', '14:00:00', '15:00:00', 1),
(5, 'Current Semester', 'Wednesday', '08:00:00', '09:00:00', 1), 
(6, 'Current Semester', 'Wednesday', '09:00:00', '10:00:00', 1),
(7, 'Current Semester', 'Wednesday', '13:00:00', '14:00:00', 1),
(8, 'Current Semester', 'Wednesday', '14:00:00', '15:00:00', 1);

-- -----------------------------------------------------
-- Offer Table
-- -----------------------------------------------------
INSERT INTO Offer (OfferID, isOfferAccept, ASURITE_ID) VALUES
(1, NULL, 'ballen'),
(2, NULL, 'oqueen');
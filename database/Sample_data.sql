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
GraduationDate, TimeCommitment, isTA, isGrader, CurrentEmployer, WorkHours, isWorkedASU, 
AppStatus, DateCreated, DateSubmitted, ModifiedDate, LastSaved, ASURITE_ID) VALUES
(1, '123-111-1111', '123-222-2222', '123 First Street', NULL, 'United States', 
'Central City', 'Missouri', 10001, 'Ph.D Computer Engineering', 4.2, 
'Electrical Engineering', 0, 0, 0, NULL, '2016-08-15', 'Spring 2020', '10 hours per week', 
1, 0, NULL, NULL, 1, 'incomplete', '2017-01-03 00:12:32', NULL, NULL, '/availability', 'ballen'),
(2, '231-232-1111', '231-222-2222', '1282 Washington Avenue', NULL, 'United States', 
'Star City', 'California', 20020, 'Ph.D Computer Science', 3.8, 'Computer Science', 0,
0, 0, NULL, '2014-08-15', 'Spring 2018', '20 hours per week', 1, 0, NULL, NULL, 0, 
'incomplete', '2017-01-05 23:45:08', NULL, NULL, '/education', 'oqueen'),
(3, '342-443-1341', '342-234-1322', '1407 Graymalkin Lane', NULL, 'United States', 
'Salem Center', 'New York', 10501, 'M.S. Computer Engineering', 2.8, 'Computer Science', 1,
1, 1, 250, '2012-08-15', 'Spring 2017', '10 hours per week', 0, 1, NULL, NULL, 0, 
'incomplete', '2017-01-04 08:23:16', NULL, '2017-01-06 12:05:46', '/employment', 'jgrey');

-- -----------------------------------------------------
-- IDEs Table
-- -----------------------------------------------------
INSERT INTO IDEs (IDEid, isIDE, OtherIDE, ASURITE_ID) VALUES
(1, 'Android Studio', NULL, 'ballen'),
(2, 'Brackets', NULL, 'ballen'),
(3, 'IntelliJ', NULL, 'ballen'),
(4, 'NetBeans', NULL, 'ballen'),
(5, 'Xcode', NULL, 'ballen'),
(6, 'Android Studio', NULL, 'oqueen'),
(7, 'Brackets', NULL, 'oqueen'),
(8, 'IntelliJ', NULL, 'oqueen'),
(9, 'NetBeans', NULL, 'oqueen'),
(10, NULL, 'Eclipse', 'oqueen'),
(11, 'Android Studio', NULL, 'jgrey'),
(12, 'Brackets', NULL, 'jgrey'),
(13, 'IntelliJ', NULL, 'jgrey'),
(14, 'NetBeans', NULL, 'jgrey'),
(15, 'Xcode', NULL, 'jgrey'),
(16, NULL, 'Eclipse', 'jgrey'),
(17, NULL, 'Atom', 'jgrey');

-- -----------------------------------------------------
-- Collaborative Tools Table
-- -----------------------------------------------------
INSERT INTO Collaborative_Tools (ToolID, isTool, OtherTool, ASURITE_ID) VALUES
(1, 'GitHub', NULL, 'ballen'),
(2, 'Taiga', NULL, 'ballen'),
(3, 'Slack', NULL, 'ballen'),
(5, NULL, 'Skype', 'ballen'),
(6, NULL, 'Zoom', 'ballen'),
(7, 'GitHub', NULL, 'oqueen'),
(8, 'Taiga', NULL, 'oqueen'),
(9, 'Slack', NULL, 'oqueen'),
(10, NULL, 'Skype', 'oqueen'),
(11, NULL, 'Adobe Connect', 'oqueen'),
(12, 'GitHub', NULL, 'jgrey'),
(13, 'Taiga', NULL, 'jgrey'),
(14, 'Slack', NULL, 'jgrey'),
(15, NULL, 'Skype', 'jgrey');

-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------
INSERT INTO Course_Competencies (CompetenciesID, isCourse, CourseLevel, OtherCourse, 
OtherLevel, ASURITE_ID) VALUES
(1, 'ASU 101', 'Qualified', NULL, NULL, 'ballen'),
(2, 'FSE 100', 'Qualified', NULL, NULL, 'ballen'),
(3, 'CSE 110', 'Previously TA', NULL, NULL, 'ballen'),
(4, 'CSE 120', 'Previously Grader', NULL, NULL, 'ballen'),
(5, 'CSE 205', 'Qualified', NULL, NULL, 'ballen'),
(6, 'CSE 230', 'Prefer', NULL, NULL, 'ballen'),
(7, 'CSE 240', 'Qualified', NULL, NULL, 'ballen'),
(8, 'SER 215', 'Qualified', NULL, NULL, 'ballen'),
(9, 'SER 216', 'Prefer', NULL, NULL, 'ballen'),
(10, 'SER 222', 'Qualified', NULL, NULL, 'ballen'),
(11, 'SER 315', 'Qualified', NULL, NULL, 'ballen'),
(12, 'SER 316', 'Qualified', NULL, NULL, 'ballen'),
(13, 'SER 321', 'Qualified', NULL, NULL, 'ballen'),
(14, 'SER 322', 'Qualified', NULL, NULL, 'ballen'),
(15, 'SER 334', 'Qualified', NULL, NULL, 'ballen'),
(16, 'SER 401', 'Qualified', NULL, NULL, 'ballen'),
(17, 'SER 402', 'Qualified', NULL, NULL, 'ballen'),
(18, 'SER 415', 'Qualified', NULL, NULL, 'ballen'),
(19, 'SER 416', 'Qualified', NULL, NULL, 'ballen'),
(20, 'ASU 101', 'Qualified', NULL, NULL, 'oqueen'),
(21, 'FSE 100', 'Qualified', NULL, NULL, 'oqueen'),
(22, 'SER 222', 'Qualified', NULL, NULL, 'oqueen'),
(23, 'SER 321', 'Qualified', NULL, NULL, 'oqueen'),
(24, 'SER 401', 'Prefer', NULL, NULL, 'oqueen'),
(25, 'SER 402', 'Prefer', NULL, NULL, 'oqueen'),
(26, 'SER 415', 'Prefer', NULL, NULL, 'oqueen'),
(27, 'SER 416', 'Prefer', NULL, NULL, 'oqueen');


-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------
INSERT INTO Languages (LanguagesID, isLanguage, LanguageLevel, OtherLanguage, OtherLevel, ASURITE_ID) VALUES
(1, 'C', 'Proficient', NULL, NULL, 'ballen'),
(2, 'C++', 'Expert', NULL, NULL, 'ballen'),
(3, 'CSS', 'Expert', NULL, NULL, 'ballen'),
(4, 'HTML', 'Expert', NULL, NULL, 'ballen'),
(5, 'Java', 'Novice', NULL, NULL, 'ballen'),
(6, 'JavaScript', 'Proficient', NULL, NULL, 'ballen'),
(7, 'JSON', 'Proficient', NULL, NULL, 'ballen'),
(8, 'Python', 'Expert', NULL, NULL, 'ballen'),
(9, 'SQL', 'Proficient', NULL, NULL, 'ballen'),
(10, 'Verilog', 'Expert', NULL, NULL, 'ballen'),
(11, 'XML', 'Novice', NULL, NULL, 'ballen'),
(12, NULL, NULL, 'C#', 'Proficient', 'ballen'),
(13, NULL, NULL, 'Ruby', 'Proficient', 'ballen'),
(14, 'C', 'Novice', NULL, NULL, 'oqueen'),
(15, 'C++', 'Novice', NULL, NULL, 'oqueen'),
(16, 'CSS', 'Expert', NULL, NULL, 'oqueen'),
(17, 'HTML', 'Expert', NULL, NULL, 'oqueen'),
(18, 'Java', 'Novice', NULL, NULL, 'oqueen'),
(19, 'JavaScript', 'Expert', NULL, NULL, 'oqueen'),
(20, 'JSON', 'Expert', NULL, NULL, 'oqueen'),
(21, 'Python', 'Expert', NULL, NULL, 'oqueen'),
(22, 'SQL', 'Proficient', NULL, NULL, 'oqueen'),
(23, 'Swift', 'Novice', NULL, NULL, 'oqueen'),
(24, NULL, NULL, 'Ruby', 'Proficient', 'oqueen'),
(25, 'C', 'Novice', NULL, NULL, 'jgrey'),
(26, 'C++', 'Novice', NULL, NULL, 'jgrey'),
(27, 'CSS', 'Expert', NULL, NULL, 'jgrey'),
(28, 'HTML', 'Expert', NULL, NULL, 'jgrey'),
(29, 'Java', 'Novice', NULL, NULL, 'jgrey'),
(30, 'JavaScript', 'Expert', NULL, NULL, 'jgrey'),
(31, 'JSON', 'Proficient', NULL, NULL, 'jgrey'),
(32, 'Python', 'Expert', NULL, NULL, 'jgrey'),
(33, 'SQL', 'Proficient', NULL, NULL, 'jgrey'),
(34, 'Swift', 'Novice', NULL, NULL, 'jgrey'),
(35, NULL, NULL, 'C#', 'Novice', 'jgrey'),
(36, NULL, NULL, 'Ruby', 'Proficient', 'jgrey'),
(37, NULL, NULL, 'Prolog', 'Novice', 'jgrey');

-- -----------------------------------------------------
-- Attachment Table
-- -----------------------------------------------------
INSERT INTO Attachment (AttachmentID, AttachmentName, AttachmentType, UploadDate, 
ASURITE_ID) VALUES
(1, 'BarryAllenResume.pdf', 'Resume', '2017-01-03 11:35:18', 'ballen'),
(2, 'BarryAllenTranscript.pdf', 'Transcript', '2017-01-03 11:55:42', 'ballen'),
(3, 'BarryAllenipos.pdf', 'IPOS', '2017-01-03 12:05:25', 'ballen'),
(4, 'QueenResume.pdf', 'Resume', '2017-01-11 15:08:28', 'oqueen'),
(6, 'QueenTranscript.pdf', 'Transcript', '2017-01-11 15:46:09', 'oqueen');

-- -----------------------------------------------------
-- Calendar Table
-- -----------------------------------------------------
INSERT INTO Calendar (CalendarID, CalendarDay, StartHour, StopHour, ASURITE_ID) VALUES
(1, 'Monday', '08:00:00', '10:00:00', 'ballen'), 
(2, 'Monday', '10:00:00', '12:00:00', 'ballen'),
(3, 'Monday', '14:00:00', '16:00:00', 'ballen'),
(4, 'Tuesday', '08:00:00', '10:00:00', 'ballen'),
(5, 'Tuesday', '10:00:00', '12:00:00', 'ballen'),
(6, 'Tuesday', '16:00:00', '18:00:00', 'ballen'), 
(7, 'Wednesday', '08:00:00', '10:00:00', 'ballen'),
(8, 'Wednesday', '10:00:00', '12:00:00', 'ballen'),
(9, 'Wednesday', '14:00:00', '16:00:00', 'ballen'),
(10, 'Thursday', '08:00:00', '10:00:00', 'ballen'),
(11, 'Thursday', '10:00:00', '12:00:00', 'ballen'),
(12, 'Thursday', '12:00:00', '14:00:00', 'ballen'),
(13, 'Friday', '08:00:00', '10:00:00', 'ballen'),
(14, 'Friday', '10:00:00', '12:00:00', 'ballen'), 
(15, 'Monday', '10:00:00', '12:00:00', 'oqueen'),
(16, 'Monday', '12:00:00', '14:00:00', 'oqueen'),
(17, 'Monday', '16:00:00', '18:00:00', 'oqueen'),
(18, 'Monday', '18:00:00', '20:00:00', 'oqueen'),
(19, 'Tuesday', '16:00:00', '17:00:00', 'oqueen'), 
(20, 'Tuesday', '10:00:00', '12:00:00', 'oqueen'),
(21, 'Tuesday', '12:00:00', '14:00:00', 'oqueen'),
(22, 'Wednesday', '08:00:00', '10:00:00', 'oqueen'),
(23, 'Wednesday', '10:00:00', '12:00:00', 'oqueen'), 
(24, 'Wednesday', '12:00:00', '13:00:00', 'oqueen'),
(25, 'Thursday', '08:00:00', '10:00:00', 'oqueen'),
(26, 'Thursday', '10:00:00', '12:00:00', 'oqueen'),
(27, 'Thursday', '14:00:00', '16:00:00', 'oqueen'),
(28, 'Friday', '10:00:00', '12:00:00', 'oqueen');

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
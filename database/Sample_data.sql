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
AppStatus, DateCreated, DateSubmitted, ModifiedDate, isContactComplete, isEducationComplete, 
isEmploymentComplete, isAvailabilityComplete, isLanguagesComplete, isCoursesComplete, ASURITE_ID) VALUES
(1, '123-111-1111', '123-222-2222', '123 First Street', NULL, 'United States', 
'Central City', 'Missouri', 10001, 'Ph.D Computer Engineering', 4.2, 
'Electrical Engineering', 0, 0, 0, NULL, '2016-08-15', 'Spring 2020', '10 hours per week', 
1, 0, NULL, NULL, 1, 'incomplete', '2017-01-03 00:12:32', NULL, NULL, 1, 1, 0, 1, 1, 1, 'ballen'),
(2, '231-232-1111', '231-222-2222', '1282 Washington Avenue', NULL, 'United States', 
'Star City', 'California', 20020, 'Ph.D Computer Science', 3.8, 'Computer Science', 0,
0, 0, NULL, '2014-08-15', 'Spring 2018', '20 hours per week', 1, 0, NULL, NULL, 0, 
'incomplete', '2017-01-05 23:45:08', NULL, NULL, 1, 1, 0, 0, 1, 0, 'oqueen'),
(3, '342-443-1341', '342-234-1322', '1407 Graymalkin Lane', NULL, 'United States', 
'Salem Center', 'New York', 10501, 'M.S. Computer Engineering', 2.8, 'Computer Science', 1,
1, 1, 250, '2012-08-15', 'Spring 2017', '10 hours per week', 0, 1, NULL, NULL, 0, 
'incomplete', '2017-01-04 08:23:16', NULL, '2017-01-06 12:05:46', 1, 1, 0, 0, 1, 0, 'jgrey');


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
INSERT INTO Course_Competencies (CompetenciesID, isCourse, CourseTitle, CourseSelect, OtherCourse, 
OtherSelect, ASURITE_ID) VALUES
(1, 'ASU 101', 'The ASU Experience', 'Qualified', NULL, NULL, 'ballen'),
(2, 'FSE 100', 'Introduction to Engineering', 'Qualified', NULL, NULL, 'ballen'),
(3, 'CSE 110', 'Principles of Programming', 'Previously TA', NULL, NULL, 'ballen'),
(4, 'CSE 120', 'Digital Design Fundamentals', 'Previously Grader', NULL, NULL, 'ballen'),
(5, 'CSE 205', 'Object-Oriented Programming and Data Structures', 'Qualified', NULL, NULL, 'ballen'),
(6, 'CSE 230', 'Computer Organization and Assembly Language Programming', 'Prefer', NULL, NULL, 'ballen'),
(7, 'CSE 240', 'Introduction to Programming Languages', 'Qualified', NULL, NULL, 'ballen'),
(8, 'SER 215', 'Software Enterprise: Personal Process', 'Qualified', NULL, NULL, 'ballen'),
(9, 'SER 216', 'Software Enterprise: Testing and Quality', 'Prefer', NULL, NULL, 'ballen'),
(10, 'SER 222', 'Design and Analysis of Data Structures and Algorithms', 'Qualified', NULL, NULL, 'ballen'),
(11, 'SER 315', 'Software Enterprise: Design and Process', 'Qualified', NULL, NULL, 'ballen'),
(12, 'SER 316', 'Software Enterprise: Construction and Transition', 'Qualified', NULL, NULL, 'ballen'),
(13, 'SER 321', 'Principles of Distributed Software Systems', 'Qualified', NULL, NULL, 'ballen'),
(14, 'SER 322', 'Principles of Database Management', 'Qualified', NULL, NULL, 'ballen'),
(15, 'SER 334', 'Operating Systems and Networks', 'Qualified', NULL, NULL, 'ballen'),
(16, 'SER 401', 'Computing Capstone Project I', 'Qualified', NULL, NULL, 'ballen'),
(17, 'SER 402', 'Computing Capstone Project II', 'Qualified', NULL, NULL, 'ballen'),
(18, 'SER 415', 'Software Enterprise: Inception and Elaboration', 'Qualified', NULL, NULL, 'ballen'),
(19, 'SER 416', 'Software Enterprise: Project and Process Management', 'Qualified', NULL, NULL, 'ballen');


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
(1, 'A', 'ASUOnline', 'ASU', 101, 10201, 'The ASU Experience', 3, NULL, NULL, NULL,
'Abraham', 'Helsing'),
(2, 'A', 'ASUOnline', 'SER', 421, 11321, 'Web-Based Applications and Mobile Systems', 3, NULL, NULL, NULL,
'Bruce', 'Banner'),
(3, 'A', 'ASUOnline', 'SER', 422, 12312, 'Web Application Programming', 3, NULL, NULL, NULL,
'Henry', 'McCoy'),
(4, 'B', 'ASUOnline', 'CSE', 120, 10121, 'Digital Design Fundamentals', 3, NULL, NULL, NULL,
'Abraham', 'Helsing'),
(5, 'B', 'ASUOnline', 'FSE', 100, 12012, 'Introduction to Engineering', 3, NULL, NULL, NULL,
'Bruce', 'Banner'),
(6, 'B', 'ASUOnline', 'CSE', 205, 13021, 'Object-Oriented Programming and Data Structures', 3, NULL, NULL, NULL,
'Charles', 'Xavier'),
(7, 'A', 'ASUOnline', 'SER', 215, 13245, 'Software Enterprise: Personal Process', 3, NULL, NULL, NULL,
'Charles', 'Xavier'),
(8, 'B', 'ASUOnline', 'SER', 216, 10001, 'Software Enterprise: Testing and Quality', 3, NULL, NULL, NULL,
'Bruce', 'Banner'),
(9, 'C', 'ASUOnline', 'SER', 401, 10244, 'Computing Capstone Project I', 3, NULL, NULL, NULL,
'Abraham', 'Helsing'),
(10, 'C', 'ASUOnline', 'SER', 402, 14401, 'Computing Capstone Project II', 3, NULL, NULL, NULL,
'Abraham', 'Helsing'),
(11, 'C', 'POLY', 'SER', 401, 10111, 'Computing Capstone Project I', 3, 'Tuesday, Thursday', '10:00:00', '11:15:00',
'Henry', 'McCoy'),
(12, 'C', 'POLY', 'SER', 402, 14222, 'Computing Capstone Project II', 3, 'Tuesday, Thursday', '08:00:00', '09:15:00',
'Henry', 'McCoy');


-- -----------------------------------------------------
-- Student Request Table
-- -----------------------------------------------------
INSERT INTO Student_Request (RequestID, DateCreated, ScheduleID, ASURITE_ID) VALUES
(1, '2017-01-10 11:28:01', 1, 'ballen');


-- -----------------------------------------------------
-- Placement Table
-- -----------------------------------------------------
INSERT INTO Placement (PlaceID, TA, GraderOne, GraderTwo, TAHours, GraderOneHours, 
GraderTwoHours, ScheduleID) VALUES
(1, 'Barry Allen', 'Oliver Queen', NULL, 10, 10, NULL, 1);


-- -----------------------------------------------------
-- Enrollment Table
-- -----------------------------------------------------
INSERT INTO Enrollment (EnrollmentID, EnrollmentNumPrev, EnrollmentNumCurrent, EnrollmentDiff,
DateEntered, ScheduleID) VALUES
(1, 40, 50, 10, '2017-01-01', 1);
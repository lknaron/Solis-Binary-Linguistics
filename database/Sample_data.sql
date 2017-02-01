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
'2017-01-01 00:02:03', 1, '2017-01-01 00:03:00'),
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
'Central City', 'Missouri', 'Ph.D Computer Engineering', 4.2, 'Electrical Engineering', 0,
0, 0, NULL, '08/15/2016', 'Spring 2020', '10 hours per week', 1, 0, NULL, NULL, 
'incomplete', '2017-01-03 00:12:32', NULL, NULL, NULL, '/employment', 'ballen');

-- -----------------------------------------------------
-- IDEs Table
-- -----------------------------------------------------
INSERT INTO IDEs (IDEid, isAndriodStudio, isBrackets, isIntelliJ, isNetBeans, isXcode,
Other, AppID) VALUES
(1, 1, 1, 1, 1, 1, 'Eclipse', 1);

-- -----------------------------------------------------
-- Collaborative Tools Table
-- -----------------------------------------------------
INSERT INTO Collaborative_Tools (ToolID, isGitHub, isTaiga, isSlack, Other, AppID) VALUES
(1, 1, 1, 1, 'Skype', 1);

-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------
INSERT INTO Course_Competencies (CompetenciesID, isCSE110, isCSE205, isCSE230, isCSE240, 
isCSE120, isFSE100, isASU101, isSER422, isSER450, isSER456, isSER486, isSER332, isSER431, 
isSER432, isSER515, isSER516, isSER501, isSER502, isSER517, isSER518, isCSE563, isCSE564,
isCSE566, isSER215, isSER216, isSER222, isSER315, isSER316, isSER321, isSER322, isSER334,
isSER401, isSER402, isSER415, isSER416, isSER421, isSER423, Other, AppID) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
1, 1, 1, 1, 1, 1, 1, 1, NULL, 1);

-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------
INSERT INTO Languages (LanguagesID, isC, CLevel, isCSharp, CSharpLevel, isCPlusPlus, 
CPlusPlusLevel, isCSS, CSSLevel, isHTML, HTMLLevel, isJava, JavaLevel, isJavascript,
JavascriptLevel, isJSON, JSONLevel, isScheme, SchemeLevel, isPHP, PHPLevel, isPLP, 
PLPLevel, isProlog, PrologLevel, isPython, PythonLevel, isSQL, SQLLevel, isSwift, 
SwiftLevel, isVerilog, VerilogLevel, isXML, XMLLevel, Other, AppID) VALUES
(1, 1, 'Proficient', 1, 'Proficient', 1, 'Expert', 1, 'Expert', 1, 'Expert', 1, 
'Proficient', 1, 'Expert', 1, 'Proficient', 0, NULL, 1, 'Proficient', 0, NULL, 1, 
'Expert', 1, 'Expert', 1, 'Proficient', 1, 'Novice', 1, 'Expert', 1, 'Expert', NULL, 1);
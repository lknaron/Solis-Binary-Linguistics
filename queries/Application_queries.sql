-- Application Table

-- Insert Application Table
INSERT INTO Application SET?

-- Select Application 
SELECT * FROM Application WHERE ASURITE_ID = ?

-- Select Phone Number
SELECT PhoneNumber FROM Application WHERE ASURITE_ID = ?

-- Update Phone Number
UPDATE Application SET PhoneNumber = ? WHERE ASURITE_ID = ?

-- Select Mobile Number
SELECT MobileNumber FROM Application WHERE ASURITE_ID = ?

-- Update Mobile Number
UPDATE Application SET MobileNumber = ? WHERE ASURITE_ID = ?

-- Select Address 
SELECT AddressOne, AddressTwo, AddressCity, AddressState, AddressZip, AddressCountry FROM Application WHERE ASURITE_ID = ?

-- Update Address One
UPDATE Application SET AddressOne = ? WHERE ASURITE_ID = ?

-- Update Address Two
UPDATE Application SET AddressTwo = ? WHERE ASURITE_ID = ?

-- Update Address Country
UPDATE Application SET AddressCountry = ? WHERE ASURITE_ID = ?

-- Update Address City
UPDATE Application SET AddressCity = ? WHERE ASURITE_ID = ?

-- Update Address State
UPDATE Application SET AddressState = ? WHERE ASURITE_ID = ?

-- Update Address Zip
UPDATE Application SET AddressZip = ? WHERE ASURITE_ID = ?
    
-- Select Education Level
SELECT EducationLevel FROM Application WHERE ASURITE_ID = ?

-- Update Education Level
UPDATE Application SET EducationLevel = ? WHERE ASURITE_ID = ?

-- Select GPA
SELECT GPA FROM Application WHERE ASURITE_ID = ?
    
-- Update GPA
UPDATE Application SET GPA = ? WHERE ASURITE_ID = ?
    
-- Select Degree Program
SELECT DegreeProgram FROM Application WHERE ASURITE_ID = ?

-- Update Degree Program
UPDATE Application SET DegreeProgram = ? WHERE ASURITE_ID = ?

-- Select Academic Probation
SELECT isAcademicProbation FROM Application WHERE ASURITE_ID = ?

-- Update Academic Probation
UPDATE Application SET isAcademicProbation = ? WHERE ASURITE_ID = ?

-- Select Four Plus One
SELECT isFourPlusOne FROM Application WHERE ASURITE_ID = ?

-- Update Four Plus One
UPDATE Application SET isFourPlusOne = ? WHERE ASURITE_ID = ?

-- Select International Student
SELECT isInternationalStudent, SpeakTest FROM Application WHERE ASURITE_ID = ?

-- Update International Student
UPDATE Application SET isInternationalStudent = ? WHERE ASURITE_ID = ?

-- Update Speak test
UPDATE Application SET SpeakTest = ? WHERE ASURITE_ID = ?

-- Select First Session
SELECT FirstSession FROM Application WHERE ASURITE_ID = ?

-- Update First Session
UPDATE Application SET FirstSession = ? WHERE ASURITE_ID = ?

-- Select Graduation Date
SELECT GraduationDate FROM Application WHERE ASURITE_ID = ?

-- Update Graduation Date
UPDATE Application SET GraduationDate = ? WHERE ASURITE_ID = ?

-- Select Time Commitment
SELECT TimeCommitment FROM Application WHERE ASURITE_ID = ?

-- Update Time Commitment
UPDATE Application SET TimeCommitment = ? WHERE ASURITE_ID = ?

-- Select TA
SELECT isTA FROM Application WHERE ASURITE_ID = ?

-- Update TA
UPDATE Application SET isTA = ? WHERE ASURITE_ID = ?

-- Select Grader
SELECT isGrader FROM Application WHERE ASURITE_ID = ?

-- Update Grader
UPDATE Application SET isGrader = ? WHERE ASURITE_ID = ?

-- Select Current Work
SELECT CurrentEmployer, WorkHours FROM Application WHERE ASURITE_ID = ?

-- Update Current Employer 
UPDATE Application SET CurrentEmployer = ? WHERE ASURITE_ID = ?

-- Update Work Hours
UPDATE Application SET WorkHours = ? WHERE ASURITE_ID = ?

-- Select App Status
SELECT AppStatus FROM Application WHERE ASURITE_ID = ?

-- Update App Status
UPDATE Application SET AppStatus = ? WHERE ASURITE_ID = ?

-- Select Date Created
SELECT DateCreated FROM Application WHERE ASURITE_ID = ?

-- Update Date Created
UPDATE Application SET DateCreated = ? WHERE ASURITE_ID = ?

-- Select Date Submitted
SELECT DateSubmitted FROM Application WHERE ASURITE_ID = ?

-- Update Date Submitted
UPDATE Application SET DateSubmitted = ? WHERE ASURITE_ID = ?

-- Select Modified Date
SELECT ModifiedDate FROM Application WHERE ASURITE_ID = ?

-- Update Modified Date
UPDATE Application SET ModifiedDate = ? WHERE ASURITE_ID = ?

-- Update Last Saved location
UPDATE Application SET LastSaved = ? WHERE ASURITE_ID = ?

-- -----------------------------------------------------
-- Calendar Table
-- -----------------------------------------------------

-- Insert Calendar Table
INSERT INTO Calendar SET?

-- Select Calendar
SELECT * FROM Calendar WHERE ASURITE_ID = ?

-- Select Monday
SELECT CalendarDay = 'Monday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE ASURITE_ID = ?

-- Select Monday 8am to 10am
SELECT CalendarDay = 'Monday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '08:00:00' AND StopHour = '10:00:00' AND ASURITE_ID = ?

-- Select Monday 10am to 12pm
SELECT CalendarDay = 'Monday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '10:00:00' AND StopHour = '12:00:00' AND ASURITE_ID = ?

-- Select Monday 12pm to 2pm
SELECT CalendarDay = 'Monday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '12:00:00' AND StopHour = '14:00:00' AND ASURITE_ID = ?

-- Select Monday 2pm to 4pm
SELECT CalendarDay = 'Monday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '14:00:00' AND StopHour = '16:00:00' AND ASURITE_ID = ?

-- Select Monday 4pm to 6pm
SELECT CalendarDay = 'Monday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '16:00:00' AND StopHour = '18:00:00' AND ASURITE_ID = ?

-- Select Monday 6pm to 8pm
SELECT CalendarDay = 'Monday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '18:00:00' AND StopHour = '20:00:00' AND ASURITE_ID = ?

-- Select Tuesday
SELECT CalendarDay = 'Tuesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE ASURITE_ID = ?

-- Select Tuesday 8am to 10am
SELECT CalendarDay = 'Tuesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '08:00:00' AND StopHour = '10:00:00' AND ASURITE_ID = ?

-- Select Tuesday 10am to 12pm
SELECT CalendarDay = 'Tuesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '10:00:00' AND StopHour = '12:00:00' AND ASURITE_ID = ?

-- Select Tuesday 12pm to 2pm
SELECT CalendarDay = 'Tuesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '12:00:00' AND StopHour = '14:00:00' AND ASURITE_ID = ?

-- Select Tuesday 2pm to 4pm
SELECT CalendarDay = 'Tuesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '14:00:00' AND StopHour = '16:00:00' AND ASURITE_ID = ?

-- Select Tuesday 4pm to 6pm
SELECT CalendarDay = 'Tuesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '16:00:00' AND StopHour = '18:00:00' AND ASURITE_ID = ?

-- Select Tuesday 6pm to 8pm
SELECT CalendarDay = 'Tuesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '18:00:00' AND StopHour = '20:00:00' AND ASURITE_ID = ?

-- Select Wednesday
SELECT CalendarDay = 'Wednesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE ASURITE_ID = ?

-- Select Wednesday 8am to 10am
SELECT CalendarDay = 'Wednesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '08:00:00' AND StopHour = '10:00:00' AND ASURITE_ID = ?

-- Select Wednesday 10am to 12pm
SELECT CalendarDay = 'Wednesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '10:00:00' AND StopHour = '12:00:00' AND ASURITE_ID = ?

-- Select Wednesday 12pm to 2pm
SELECT CalendarDay = 'Wednesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '12:00:00' AND StopHour = '14:00:00' AND ASURITE_ID = ?

-- Select Wednesday 2pm to 4pm
SELECT CalendarDay = 'Wednesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '14:00:00' AND StopHour = '16:00:00' AND ASURITE_ID = ?

-- Select Wednesday 4pm to 6pm
SELECT CalendarDay = 'Wednesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '16:00:00' AND StopHour = '18:00:00' AND ASURITE_ID = ?

-- Select Wednesday 6pm to 8pm
SELECT CalendarDay = 'Wednesday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '18:00:00' AND StopHour = '20:00:00' AND ASURITE_ID = ?

-- Select Thursday
SELECT CalendarDay = 'Thursday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE ASURITE_ID = ?

-- Select Thursday 8am to 10am
SELECT CalendarDay = 'Thursday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '08:00:00' AND StopHour = '10:00:00' AND ASURITE_ID = ?

-- Select Thursday 10am to 12pm
SELECT CalendarDay = 'Thursday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '10:00:00' AND StopHour = '12:00:00' AND ASURITE_ID = ?

-- Select Thursday 12pm to 2pm
SELECT CalendarDay = 'Thursday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '12:00:00' AND StopHour = '14:00:00' AND ASURITE_ID = ?

-- Select Thursday 2pm to 4pm
SELECT CalendarDay = 'Thursday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '14:00:00' AND StopHour = '16:00:00' AND ASURITE_ID = ?

-- Select Thursday 4pm to 6pm
SELECT CalendarDay = 'Thursday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '16:00:00' AND StopHour = '18:00:00' AND ASURITE_ID = ?

-- Select Thursday 6pm to 8pm
SELECT CalendarDay = 'Thursday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '18:00:00' AND StopHour = '20:00:00' AND ASURITE_ID = ?

-- Select Friday
SELECT CalendarDay = 'Friday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE ASURITE_ID = ?

-- Select Friday 8am to 10am
SELECT CalendarDay = 'Friday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '08:00:00' AND StopHour = '10:00:00' AND ASURITE_ID = ?

-- Select Friday 10am to 12pm
SELECT CalendarDay = 'Friday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '10:00:00' AND StopHour = '12:00:00' AND ASURITE_ID = ?

-- Select Friday 12pm to 2pm
SELECT CalendarDay = 'Friday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '12:00:00' AND StopHour = '14:00:00' AND ASURITE_ID = ?

-- Select Friday 2pm to 4pm
SELECT CalendarDay = 'Friday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '14:00:00' AND StopHour = '16:00:00' AND ASURITE_ID = ?

-- Select Friday 4pm to 6pm
SELECT CalendarDay = 'Friday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '16:00:00' AND StopHour = '18:00:00' AND ASURITE_ID = ?

-- Select Friday 6pm to 8pm
SELECT CalendarDay = 'Friday', TIME_FORMAT(StartHour, '%h:%i %p') AS StartHour, TIME_FORMAT(StopHour, '%h:%i %p') AS StopHour FROM Calendar WHERE StartHour = '18:00:00' AND StopHour = '20:00:00' AND ASURITE_ID = ?

-- -----------------------------------------------------
-- Attachment Table
-- -----------------------------------------------------

-- Insert Attachment Table
INSERT INTO Attachment SET?

-- Select Attachment
SELECT * FROM Attachment WHERE AppID = ?

-- Select Attachment Name
SELECT AttachmentName FROM Attachment WHERE ASURITE_ID = ?

-- Select Resumes
SELECT AttachmentType = 'Resume' FROM Attachment WHERE ASURITE_ID = ?

-- Select Transcripts
SELECT AttachmentType = 'Transcript' FROM Attachment WHERE ASURITE_ID = ?

-- Select IPOS
SELECT AttachmentType = 'IPOS' FROM Attachment WHERE ASURITE_ID = ?

-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------

-- Insert Languages Table
INSERT INTO Languages SET?

-- Select Languages
SELECT * FROM Languages WHERE ASURITE_ID = ?

-- Select C Language and Level
SELECT isLanguage = 'C', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update C Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'C' AND ASURITE_ID = ?

-- Select C++ Language and Level
SELECT isLanguage = 'C++', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update C++ Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'C++' AND ASURITE_ID = ?

-- Select C Language and Level
SELECT isLanguage = 'CSS', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update CSS Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'CSS' AND ASURITE_ID = ?

-- Select HTML Language and Level
SELECT isLanguage = 'HTML', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update HTML Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'HTML' AND ASURITE_ID = ?

-- Select Java Language and Level
SELECT isLanguage = 'Java', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update Java Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'Java' AND ASURITE_ID = ?

-- Select JavaScript Language and Level
SELECT isLanguage = 'JavaScript', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update JavaScript Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'JavaScript' AND ASURITE_ID = ?

-- Select JSON Language and Level
SELECT isLanguage = 'JSON', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update JSON Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'JSON' AND ASURITE_ID = ?

-- Select Python Language and Level
SELECT isLanguage = 'Python', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update Python Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'Python' AND ASURITE_ID = ?

-- Select SQL Language and Level
SELECT isLanguage = 'SQL', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update SQL Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'SQL' AND ASURITE_ID = ?

-- Select Swift Language and Level
SELECT isLanguage = 'Swift', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update Swift Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'Swift' AND ASURITE_ID = ?

-- Select Verilog Language and Level
SELECT isLanguage = 'Verilog', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update Verilog Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'Verilog' AND ASURITE_ID = ?

-- Select XML Language and Level
SELECT isLanguage = 'XML', LanguageLevel FROM Languages WHERE ASURITE_ID = ?

-- Update XML Language Level
UPDATE Languages SET LanguageLevel = ? WHERE isLanguage = 'XML' AND ASURITE_ID = ?

-- Select Other Languages and Level
SELECT OtherLanguage, OtherLevel FROM Languages WHERE ASURITE_ID = ?

-- -----------------------------------------------------
-- IDEs Table
-- -----------------------------------------------------

-- Insert IDEs Table
INSERT INTO IDEs SET?

-- Select IDEs
SELECT * FROM IDEs WHERE ASURITE_ID = ?

-- Select Android Studio
SELECT isIDE = 'Android Studio' FROM IDEs WHERE ASURITE_ID = ?

-- Update Android Studio
UPDATE IDEs SET isIDE = ? WHERE isIDE = 'Android Studio' AND ASURITE_ID = ?

-- Select Brackets
SELECT isIDE = 'Brackets' FROM IDEs WHERE ASURITE_ID = ?

-- Update Brackets
UPDATE IDEs SET isIDE = ? WHERE isIDE = 'Brackets' AND ASURITE_ID = ?

-- Select IntelliJ
SELECT isIDE = 'IntelliJ' FROM IDEs WHERE ASURITE_ID = ?

-- Update IntelliJ
UPDATE IDEs SET isIDE = ? WHERE isIDE = 'IntelliJ' AND ASURITE_ID = ?

-- Select NetBeans
SELECT isIDE = 'NetBeans' FROM IDEs WHERE ASURITE_ID = ?

-- Update NetBeans
UPDATE IDEs SET isIDE = ? WHERE isIDE = 'NetBeans' AND ASURITE_ID = ?

-- Select Xcode
SELECT isIDE = 'Xcode' FROM IDEs WHERE ASURITE_ID = ?

-- Update Xcode
UPDATE IDEs SET isIDE = ? WHERE isIDE = 'Xcode' AND ASURITE_ID = ?

-- Select Other IDEs
SELECT OtherIDE FROM IDEs WHERE ASURITE_ID = ?

-- -----------------------------------------------------
-- Collaborative Tools Table
-- -----------------------------------------------------

-- Insert Collaborative Tools Table
INSERT INTO Collaborative_Tools SET?

-- Select Collaborative Tools Table
SELECT * FROM Collaborative_Tools WHERE ASURITE_ID = ?

-- Select GitHub
SELECT isTool = 'GitHub' FROM Collaborative_Tools WHERE ASURITE_ID = ?

-- Update GitHub
UPDATE Collaborative_Tools SET isTool = ? WHERE isTool = 'GitHub' AND ASURITE_ID = ?

-- Select Taiga
SELECT isTool = 'Taiga' FROM Collaborative_Tools WHERE ASURITE_ID = ?

-- Update Taiga
UPDATE Collaborative_Tools SET isTool = ? WHERE isTool = 'Taiga' AND ASURITE_ID = ?

-- Select Slack
SELECT isTool = 'Slack' FROM Collaborative_Tools WHERE ASURITE_ID = ?

-- Update Slack
UPDATE Collaborative_Tools SET isTool = ? WHERE isTool = 'Slack' AND ASURITE_ID = ?

-- Select Other Tools
SELECT OtherTool FROM Collaborative_Tools WHERE ASURITE_ID = ?

-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------
-- Insert Competencies Table
INSERT INTO Course_Competencies SET?

-- Select Course Compentencies Table
SELECT * FROM Course_Competencies WHERE ASURITE_ID = ?

-- Select ASU 101
SELECT isCourse = 'ASU 101', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update ASU 101
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'ASU 101' AND ASURITE_ID = ?

-- Select SER 421
SELECT isCourse = 'SER 421', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 421
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 421' AND ASURITE_ID = ?

-- Select FSE 100
SELECT isCourse = 'FSE 100', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update FSE 100
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'FSE 100' AND ASURITE_ID = ?

-- Select SER 422
SELECT isCourse = 'SER 422', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 422
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 422' AND ASURITE_ID = ?

-- Select CSE 110
SELECT isCourse = 'CSE 110', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 110
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 110' AND ASURITE_ID = ?

-- Select CSE 423
SELECT isCourse = 'CSE 423', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 423
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 423' AND ASURITE_ID = ?

-- Select CSE 120
SELECT isCourse = 'CSE 120', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 120
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 120' AND ASURITE_ID = ?

-- Select CSE 205
SELECT isCourse = 'CSE 205', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 205
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 205' AND ASURITE_ID = ?

-- Select SER 432
SELECT isCourse = 'SER 432', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 432
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 432' AND ASURITE_ID = ?

-- Select CSE 230
SELECT isCourse = 'CSE 230', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 230
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 230' AND ASURITE_ID = ?

-- Select SER 450
SELECT isCourse = 'SER 450', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 450
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 450' AND ASURITE_ID = ?

-- Select CSE 240
SELECT isCourse = 'CSE 240', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 240
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 240' AND ASURITE_ID = ?

-- Select SER 456
SELECT isCourse = 'SER 456', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 456
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 456' AND ASURITE_ID = ?

-- Select SER 215
SELECT isCourse = 'SER 215', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 215
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 215' AND ASURITE_ID = ?

-- Select SER 486
SELECT isCourse = 'SER 486', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 486
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 486' AND ASURITE_ID = ?

-- Select SER 216
SELECT isCourse = 'SER 216', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 216
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 216' AND ASURITE_ID = ?

-- Select SER 501
SELECT isCourse = 'SER 501', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 501
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 501' AND ASURITE_ID = ?

-- Select SER 222
SELECT isCourse = 'SER 222', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 222
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 222' AND ASURITE_ID = ?

-- Select SER 502
SELECT isCourse = 'SER 502', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 502
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 502' AND ASURITE_ID = ?

-- Select SER 315
SELECT isCourse = 'SER 315', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 315
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 315' AND ASURITE_ID = ?

-- Select SER 515
SELECT isCourse = 'SER 515', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 515
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 515' AND ASURITE_ID = ?

-- Select SER 316
SELECT isCourse = 'SER 316', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 316
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 316' AND ASURITE_ID = ?

-- Select SER 516
SELECT isCourse = 'SER 516', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 516
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 516' AND ASURITE_ID = ?

-- Select SER 321
SELECT isCourse = 'SER 321', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 321
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 321' AND ASURITE_ID = ?

-- Select SER 517
SELECT isCourse = 'SER 517', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 517
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 517' AND ASURITE_ID = ?

-- Select SER 322
SELECT isCourse = 'SER 322', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 322
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 322' AND ASURITE_ID = ?

-- Select SER 518
SELECT isCourse = 'SER 518', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 518
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 518' AND ASURITE_ID = ?

-- Select SER 332
SELECT isCourse = 'SER 332', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 332
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 332' AND ASURITE_ID = ?

-- Select CSE 563
SELECT isCourse = 'CSE 563', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 563
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 563' AND ASURITE_ID = ?

-- Select SER 334
SELECT isCourse = 'SER 334', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 334
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 334' AND ASURITE_ID = ?

-- Select CSE 564
SELECT isCourse = 'CSE 564', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 564
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 564' AND ASURITE_ID = ?

-- Select SER 401
SELECT isCourse = 'SER 401', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 401
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 401' AND ASURITE_ID = ?

-- Select CSE 566
SELECT isCourse = 'CSE 566', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 566
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'CSE 566' AND ASURITE_ID = ?

-- Select SER 402
SELECT isCourse = 'SER 402', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 402
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 402' AND ASURITE_ID = ?

-- Select SER 415
SELECT isCourse = 'SER 415', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 415
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 415' AND ASURITE_ID = ?

-- Select SER 416
SELECT isCourse = 'SER 416', CourseLevel FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 416
UPDATE Course_Competencies SET CourseLevel = ? WHERE isCourse = 'SER 416' AND ASURITE_ID = ?

-- -----------------------------------------------------
-- Schedule Table
-- -----------------------------------------------------
-- Insert Schedule Table
INSERT INTO Schedule_ SET?

-- Select Schedule Table
SELECT * FROM Schedule_

-- Select Online Schedule
SELECT * FROM Schedule_ WHERE Location = 'ASUOnline'

-- Select Poly Campus Schedule
SELECT * FROM Schedule_ WHERE Location = 'POLY'

-- Select Session A Sechdule
SELECT * FROM Schedule_ WHERE SessionIs = 'A'

-- Select Session A Online Schedule 
SELECT * FROM Schedule_ WHERE SessionIs = 'A' AND Location = 'ASUOnline'

-- Select Session A Poly Campus Schedule 
SELECT * FROM Schedule_ WHERE SessionIs = 'A' AND Location = 'POLY'

-- Select Session B Schedule
SELECT * FROM Schedule_ WHERE SessionIs = 'B'

-- Select Session B Online Schedule 
SELECT * FROM Schedule_ WHERE SessionIs = 'B' AND Location = 'ASUOnline'

-- Select Session B Poly Campus Schedule 
SELECT * FROM Schedule_ WHERE SessionIs = 'B' AND Location = 'POLY'

-- Select Session C Schedule
SELECT * FROM Schedule_ WHERE SessionIs = 'C'

-- Select Session C Online Schedule 
SELECT * FROM Schedule_ WHERE SessionIs = 'C' AND Location = 'ASUOnline'

-- Select Session C Poly Campus Schedule 
SELECT * FROM Schedule_ WHERE SessionIs = 'C' AND Location = 'POLY'

-- Select Courses on Tuesdays and Thursday
SELECT * FROM Schedule_ WHERE Days = 'Tuesday, Thursday'

-- Select Courses on Monday and Wednesday 
SELECT * FROM Schedule_ WHERE Days = 'Monday, Wednesday'

-- Select Courses on Monday, Wednesday, and Friday
SELECT * FROM Schedule_ WHERE Days = 'Monday, Wednesday, Friday'

-- Select ASU 101
SELECT * FROM Schedule_ WHERE Subject = 'ASU' AND CatalogNumber = 101

-- Select ASU 101 Online
SELECT * FROM Schedule_ WHERE Subject = 'ASU' AND CatalogNumber = 101 AND Location = 'ASUOnline'

-- Select ASU 101 Campus
SELECT * FROM Schedule_ WHERE Subject = 'ASU' AND CatalogNumber = 101 AND Location = 'POLY'

-- Select SER 421
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 421

-- Select SER 421 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 421 AND Location = 'ASUOnline'

-- Select SER 421 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 421 AND Location = 'POLY'

-- Select FSE 100 
SELECT * FROM Schedule_ WHERE Subject = 'FSE' AND CatalogNumber = 100

-- Select FSE 100 Online
SELECT * FROM Schedule_ WHERE Subject = 'FSE' AND CatalogNumber = 100 AND Location = 'ASUOnline'

-- Select FSE 100 Campus
SELECT * FROM Schedule_ WHERE Subject = 'FSE' AND CatalogNumber = 100 AND Location = 'POLY'

-- Select SER 422
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 422

-- Select SER 422 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 422 AND Location = 'ASUOnline'

-- Select SER 422 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 422 AND Location = 'POLY'

-- Select CSE 110
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 110

-- Select CSE 110 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 110 AND Location = 'ASUOnline'

-- Select CSE 110 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 110 AND Location = 'POLY'

-- Select CSE 423
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 423

-- Select CSE 423 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 423 AND Location = 'ASUOnline'

-- Select CSE 423 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 423 AND Location = 'POLY'

-- Select CSE 120
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 120

-- Select CSE 120 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 120 AND Location = 'ASUOnline'

-- Select CSE 120 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 120 AND Location = 'POLY'

-- Select CSE 205
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 205

-- Select CSE 205 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 205 AND Location = 'ASUOnline'

-- Select CSE 205 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 205 AND Location = 'POLY'

-- Select SER 432
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 432

-- Select SER 432 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 432 AND Location = 'ASUOnline'

-- Select SER 432 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 432 AND Location = 'POLY'

-- Select CSE 230
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 230

-- Select CSE 230 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 230 AND Location = 'ASUOnline'

-- Select CSE 230 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 230 AND Location = 'POLY'

-- Select SER 450
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 450

-- Select SER 450 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 450 AND Location = 'ASUOnline'

-- Select SER 450 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 450 AND Location = 'POLY'

-- Select CSE 240
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 240

-- Select CSE 240 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 240 AND Location = 'ASUOnline'

-- Select CSE 240 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 240 AND Location = 'POLY'

-- Select SER 456
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 456

-- Select SER 456 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 456 AND Location = 'ASUOnline'

-- Select SER 456 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 456 AND Location = 'POLY'

-- Select SER 215
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 215

-- Select SER 215 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 215 AND Location = 'ASUOnline'

-- Select SER 215 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 215 AND Location = 'POLY'

-- Select SER 486
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 486

-- Select SER 486 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 486 AND Location = 'ASUOnline'

-- Select SER 486 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 486 AND Location = 'POLY'

-- Select SER 216
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 216

-- Select SER 216 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 216 AND Location = 'ASUOnline'

-- Select SER 216 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 216 AND Location = 'POLY'

-- Select SER 501
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 501

-- Select SER 501 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 501 AND Location = 'ASUOnline'

-- Select SER 501 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 501 AND Location = 'POLY'

-- Select SER 222
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 222

-- Select SER 222 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 222 AND Location = 'ASUOnline'

-- Select SER 222 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 222 AND Location = 'POLY'

-- Select SER 502
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 502

-- Select SER 502 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 502 AND Location = 'ASUOnline'

-- Select SER 502 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 502 AND Location = 'POLY'

-- Select SER 315
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 315

-- Select SER 315 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 315 AND Location = 'ASUOnline'

-- Select SER 315 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 315 AND Location = 'POLY'

-- Select SER 515
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 515

-- Select SER 515 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 515 AND Location = 'ASUOnline'

-- Select SER 515 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 515 AND Location = 'POLY'

-- Select SER 316
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 316

-- Select SER 316 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 316 AND Location = 'ASUOnline'

-- Select SER 316 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 316 AND Location = 'POLY'

-- Select SER 516
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 516

-- Select SER 516 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 516 AND Location = 'ASUOnline'

-- Select SER 516 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 516 AND Location = 'POLY'

-- Select SER 321
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 321

-- Select SER 321 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 321 AND Location = 'ASUOnline'

-- Select SER 321 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 321 AND Location = 'POLY'

-- Select SER 517
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 517

-- Select SER 517 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 517 AND Location = 'ASUOnline'

-- Select SER 517 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 517 AND Location = 'POLY'

-- Select SER 322
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 322

-- Select SER 322 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 322 AND Location = 'ASUOnline'

-- Select SER 322 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 322 AND Location = 'POLY'

-- Select SER 518 
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 518

-- Select SER 518 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 518 AND Location = 'ASUOnline'

-- Select SER 518 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 518 AND Location = 'POLY'

-- Select SER 332
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 332

-- Select SER 332 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 332 AND Location = 'ASUOnline'

-- Select SER 332 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 332 AND Location = 'POLY'

-- Select CSE 563
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 563

-- Select CSE 563 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 563 AND Location = 'ASUOnline'

-- Select CSE 563 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 563 AND Location = 'POLY'

-- Select SER 334
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 334

-- Select SER 334 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 334 AND Location = 'ASUOnline'

-- Select SER 334 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 334 AND Location = 'POLY'

-- Select CSE 564
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 564

-- Select CSE 564 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 564 AND Location = 'ASUOnline'

-- Select CSE 564 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 564 AND Location = 'POLY'

-- Select SER 401
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 401

-- Select SER 401 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 401 AND Location = 'ASUOnline'

-- Select SER 401 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 401 AND Location = 'POLY'

-- Select CSE 566
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 566

-- Select CSE 566 Online
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 566 AND Location = 'ASUOnline'

-- Select CSE 566 Campus
SELECT * FROM Schedule_ WHERE Subject = 'CSE' AND CatalogNumber = 566 AND Location = 'POLY'

-- Select SER 402
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 402

-- Select SER 402 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 402 AND Location = 'ASUOnline'

-- Select SER 402 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 402 AND Location = 'POLY'

-- Select SER 415
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 415

-- Select SER 415 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 415 AND Location = 'ASUOnline'

-- Select SER 415 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 415 AND Location = 'POLY'

-- Select SER 416
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 416

-- Select SER 416 Online
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 416 AND Location = 'ASUOnline'

-- Select SER 416 Campus
SELECT * FROM Schedule_ WHERE Subject = 'SER' AND CatalogNumber = 416 AND Location = 'POLY'

-- -----------------------------------------------------
-- Deadline Table
-- -----------------------------------------------------
-- Insert Deadline Table
INSERT INTO Deadline SET?

-- Select Semester 
SELECT CurrentSemester, DeadlineDate FROM Deadline

-- Update Deadline
UPDATE Deadline SET DeadlineDate = ? WHERE CurrentSemester = ?
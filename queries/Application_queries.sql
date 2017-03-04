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


-- Attachment Table

-- Insert Attachment Table
INSERT INTO Attachment SET?

-- Select Attachment
SELECT * FROM Attachment WHERE AppID = ?

-- Update Attachment Name
UPDATE Attachment SET AttachmentName = ? WHERE AppID = ?

-- Update Attachment Type
UPDATE Attachment SET AttachmentType = ? WHERE AppID = ?

-- Update Attachment Size
UPDATE Attachment SET AttachmentSize = ? WHERE AppID = ?

-- Update Upload Date
UPDATE Attachment SET UploadDate = ? WHERE AppID = ?

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


-- Course Competencies Table

-- Insert Course Competencies
INSERT INTO Course_Competencies SET?

-- Select Course Competences
SELECT * FROM Course_Competencies WHERE AppID = ?

-- Select CSE 110
SELECT isCSE110 FROM Course_Competencies WHERE AppID = ?

-- Update CSE 110
UPDATE Course_Competencies SET isCSE110 = ? WHERE AppID = ?

-- Select CSE 205
SELECT isCSE205 FROM Course_Competencies WHERE AppID = ?

-- Update CSE 205
UPDATE Course_Competencies SET isCSE205 = ? WHERE AppID = ?

-- Select CSE 230
SELECT isCSE230 FROM Course_Competencies WHERE AppID = ?

-- Update CSE 230
UPDATE Course_Competencies SET isCSE230 = ? WHERE AppID = ?

-- Select CSE 240
SELECT isCSE240 FROM Course_Competencies WHERE AppID = ?

-- Update CSE 240
UPDATE Course_Competencies SET isCSE240 = ? WHERE AppID = ?

-- Select CSE 120
SELECT isCSE120 FROM Course_Competencies WHERE AppID = ?

-- Update CSE 120
UPDATE Course_Competencies SET isCSE120 = ? WHERE AppID = ?

-- Select FSE 100
SELECT isFSE100 FROM Course_Competencies WHERE AppID = ?

-- Update FSE 100
UPDATE Course_Competencies SET isFSE100 = ? WHERE AppID = ?

-- Select ASU 101
SELECT isASU101 FROM Course_Competencies WHERE AppID = ?

-- Update ASU 101
UPDATE Course_Competencies SET isASU101 = ? WHERE AppID = ?

-- Select SER 422
SELECT isSER422 FROM Course_Competencies WHERE AppID = ?

-- Update SER 422
UPDATE Course_Competencies SET isSER422 = ? WHERE AppID = ?

-- Select SER 450
SELECT isSER450 FROM Course_Competencies WHERE AppID = ?

-- Update SER 450
UPDATE Course_Competencies SET isSER450 = ? WHERE AppID = ?

-- Select SER 456
SELECT isSER456 FROM Course_Competencies WHERE AppID = ?

-- Update SER 456
UPDATE Course_Competencies SET isSER456 = ? WHERE AppID = ?

-- Select SER 486
SELECT isSER486 FROM Course_Competencies WHERE AppID = ?

-- Update SER 486
UPDATE Course_Competencies SET isSER486 = ? WHERE AppID = ?

-- Select SER 332
SELECT isSER332 FROM Course_Competencies WHERE AppID = ?

-- Update SER 332
UPDATE Course_Competencies SET isSER332 = ? WHERE AppID = ?

-- Select SER 431
SELECT isSER431 FROM Course_Competencies WHERE AppID = ?

-- Update SER 431
UPDATE Course_Competencies SET isSER431 = ? WHERE AppID = ?

-- Select SER 432
SELECT isSER432 FROM Course_Competencies WHERE AppID = ?

-- Update SER 432
UPDATE Course_Competencies SET isSER432 = ? WHERE AppID = ?

-- Select SER 515
SELECT isSER515 FROM Course_Competencies WHERE AppID = ?

-- Update SER 515
UPDATE Course_Competencies SET isSER515 = ? WHERE AppID = ?

-- Select SER 516
SELECT isSER516 FROM Course_Competencies WHERE AppID = ?

-- Update SER 516
UPDATE Course_Competencies SET isSER516 = ? WHERE AppID = ?

-- Select SER 501
SELECT isSER501 FROM Course_Competencies WHERE AppID = ?

-- Update SER 501
UPDATE Course_Competencies SET isSER501 = ? WHERE AppID = ?

-- Select SER 502
SELECT isSER502 FROM Course_Competencies WHERE AppID = ?

-- Update SER 502
UPDATE Course_Competencies SET isSER502 = ? WHERE AppID = ?

-- Select SER 517
SELECT isSER517 FROM Course_Competencies WHERE AppID = ?

-- Update SER 517
UPDATE Course_Competencies SET isSER517 = ? WHERE AppID = ?

-- Select SER 518
SELECT isSER518 FROM Course_Competencies WHERE AppID = ?

-- Update SER 518
UPDATE Course_Competencies SET isSER518 = ? WHERE AppID = ?

-- Select SER 563
SELECT isSER563 FROM Course_Competencies WHERE AppID = ?

-- Update SER 563
UPDATE Course_Competencies SET isSER563 = ? WHERE AppID = ?

-- Select SER 564
SELECT isSER564 FROM Course_Competencies WHERE AppID = ?

-- Update SER 564
UPDATE Course_Competencies SET isSER564 = ? WHERE AppID = ?

-- Select SER 566
SELECT isSER566 FROM Course_Competencies WHERE AppID = ?

-- Update SER 566
UPDATE Course_Competencies SET isSER566 = ? WHERE AppID = ?

-- Select SER 215
SELECT isSER215 FROM Course_Competencies WHERE AppID = ?

-- Update SER 215
UPDATE Course_Competencies SET isSER215 = ? WHERE AppID = ?

-- Select SER 216
SELECT isSER216 FROM Course_Competencies WHERE AppID = ?

-- Update SER 216
UPDATE Course_Competencies SET isSER216 = ? WHERE AppID = ?

-- Select SER 222
SELECT isSER222 FROM Course_Competencies WHERE AppID = ?

-- Update SER 222
UPDATE Course_Competencies SET isSER222 = ? WHERE AppID = ?

-- Select SER 315
SELECT isSER315 FROM Course_Competencies WHERE AppID = ?

-- Update SER 315
UPDATE Course_Competencies SET isSER315 = ? WHERE AppID = ?

-- Select SER 316
SELECT isSER316 FROM Course_Competencies WHERE AppID = ?

-- Update SER 316
UPDATE Course_Competencies SET isSER316 = ? WHERE AppID = ?

-- Select SER 321
SELECT isSER321 FROM Course_Competencies WHERE AppID = ?

-- Update SER 321
UPDATE Course_Competencies SET isSER321 = ? WHERE AppID = ?

-- Select SER 322
SELECT isSER322 FROM Course_Competencies WHERE AppID = ?

-- Update SER 322
UPDATE Course_Competencies SET isSER322 = ? WHERE AppID = ?

-- Select SER 334
SELECT isSER334 FROM Course_Competencies WHERE AppID = ?

-- Update SER 334
UPDATE Course_Competencies SET isSER334 = ? WHERE AppID = ?

- -Select SER 401
SELECT isSER401 FROM Course_Competencies WHERE AppID = ?

-- Update SER 401
UPDATE Course_Competencies SET isSER401 = ? WHERE AppID = ?

- Select SER 402
SELECT isSER402 FROM Course_Competencies WHERE AppID = ?

-- Update SER 402
UPDATE Course_Competencies SET isSER402 = ? WHERE AppID = ?

-- Select SER 415
SELECT isSER415 FROM Course_Competencies WHERE AppID = ?

-- Update SER 415
UPDATE Course_Competencies SET isSER415 = ? WHERE AppID = ?

-- Select SER 416
SELECT isSER416 FROM Course_Competencies WHERE AppID = ?

-- Update SER 416
UPDATE Course_Competencies SET isSER416 = ? WHERE AppID = ?

-- Select SER 421
SELECT isSER421 FROM Course_Competencies WHERE AppID = ?

-- Update SER 421
UPDATE Course_Competencies SET isSER421 = ? WHERE AppID = ?

-- Select SER 423
SELECT isSER423 FROM Course_Competencies WHERE AppID = ?

-- Update SER 423
UPDATE Course_Competencies SET isSER423 = ? WHERE AppID = ?

-- Select Other
SELECT Other FROM Course_Competencies WHERE AppID = ?

-- Update Other
UPDATE Course_Competencies SET Other = ? WHERE AppID = ?

-- Courses Taught Table

-- Insert Courses Taught Table
INSERT INTO Courses_Taught SET?

-- Select Courses Taught
SELECT * FROM Courses_Taught WHERE AppID = ?

-- Select CSE 110
SELECT isCSE110 FROM Courses_Taught WHERE AppID = ?

-- Update CSE 110
UPDATE Courses_Taught SET isCSE110 = ? WHERE AppID = ?

-- Select CSE 205
SELECT isCSE205 FROM Courses_Taught WHERE AppID = ?

-- Update CSE 205
UPDATE Courses_Taught SET isCSE205 = ? WHERE AppID = ?

-- Select CSE 230
SELECT isCSE230 FROM Courses_Taught WHERE AppID = ?

-- Update CSE 230
UPDATE Courses_Taught SET isCSE230 = ? WHERE AppID = ?

-- Select CSE 240
SELECT isCSE240 FROM Courses_Taught WHERE AppID = ?

-- Update CSE 240
UPDATE Courses_Taught SET isCSE240 = ? WHERE AppID = ?

-- Select CSE 120
SELECT isCSE120 FROM Courses_Taught WHERE AppID = ?

-- Update CSE 120
UPDATE Courses_Taught SET isCSE120 = ? WHERE AppID = ?

-- Select FSE 100
SELECT isFSE100 FROM Courses_Taught WHERE AppID = ?

-- Update FSE 100
UPDATE Courses_Taught SET isFSE100 = ? WHERE AppID = ?

-- Select ASU 101
SELECT isASU101 FROM Courses_Taught WHERE AppID = ?

-- Update ASU 101
UPDATE Courses_Taught SET isASU101 = ? WHERE AppID = ?

-- Select SER 422
SELECT isSER422 FROM Courses_Taught WHERE AppID = ?

-- Update SER 422
UPDATE Courses_Taught SET isSER422 = ? WHERE AppID = ?

-- Select SER 450
SELECT isSER450 FROM Courses_Taught WHERE AppID = ?

-- Update SER 450
UPDATE Courses_Taught SET isSER450 = ? WHERE AppID = ?

-- Select SER 456
SELECT isSER456 FROM Courses_Taught WHERE AppID = ?

-- Update SER 456
UPDATE Courses_Taught SET isSER456 = ? WHERE AppID = ?

-- Select SER 486
SELECT isSER486 FROM Courses_Taught WHERE AppID = ?

-- Update SER 486
UPDATE Courses_Taught SET isSER486 = ? WHERE AppID = ?

-- Select SER 332
SELECT isSER332 FROM Courses_Taught WHERE AppID = ?

-- Update SER 332
UPDATE Courses_Taught SET isSER332 = ? WHERE AppID = ?

-- Select SER 431
SELECT isSER431 FROM Courses_Taught WHERE AppID = ?

-- Update SER 431
UPDATE Courses_Taught SET isSER431 = ? WHERE AppID = ?

-- Select SER 432
SELECT isSER432 FROM Courses_Taught WHERE AppID = ?

-- Update SER 432
UPDATE Courses_Taught SET isSER432 = ? WHERE AppID = ?

-- Select SER 515
SELECT isSER515 FROM Courses_Taught WHERE AppID = ?

-- Update SER 515
UPDATE Courses_Taught SET isSER515 = ? WHERE AppID = ?

-- Select SER 516
SELECT isSER516 FROM Courses_Taught WHERE AppID = ?

-- Update SER 516
UPDATE Courses_Taught SET isSER516 = ? WHERE AppID = ?

-- Select SER 501
SELECT isSER501 FROM Courses_Taught WHERE AppID = ?

-- Update SER 501
UPDATE Courses_Taught SET isSER501 = ? WHERE AppID = ?

-- Select SER 502
SELECT isSER502 FROM Courses_Taught WHERE AppID = ?

-- Update SER 502
UPDATE Courses_Taught SET isSER502 = ? WHERE AppID = ?

-- Select SER 517
SELECT isSER517 FROM Courses_Taught WHERE AppID = ?

-- Update SER 517
UPDATE Courses_Taught SET isSER517 = ? WHERE AppID = ?

-- Select SER 518
SELECT isSER518 FROM Courses_Taught WHERE AppID = ?

-- Update SER 518
UPDATE Courses_Taught SET isSER518 = ? WHERE AppID = ?

-- Select SER 563
SELECT isSER563 FROM Courses_Taught WHERE AppID = ?

-- Update SER 563
UPDATE Courses_Taught SET isSER563 = ? WHERE AppID = ?

-- Select SER 564
SELECT isSER564 FROM Courses_Taught WHERE AppID = ?

-- Update SER 564
UPDATE Courses_Taught SET isSER564 = ? WHERE AppID = ?

-- Select SER 566
SELECT isSER566 FROM Courses_Taught WHERE AppID = ?

-- Update SER 566
UPDATE Courses_Taught SET isSER566 = ? WHERE AppID = ?

-- Select SER 215
SELECT isSER215 FROM Courses_Taught WHERE AppID = ?

-- Update SER 215
UPDATE Courses_Taught SET isSER215 = ? WHERE AppID = ?

-- Select SER 216
SELECT isSER216 FROM Courses_Taught WHERE AppID = ?

-- Update SER 216
UPDATE Courses_Taught SET isSER216 = ? WHERE AppID = ?

-- Select SER 222
SELECT isSER222 FROM Courses_Taught WHERE AppID = ?

-- Update SER 222
UPDATE Courses_Taught SET isSER222 = ? WHERE AppID = ?

-- Select SER 315
SELECT isSER315 FROM Courses_Taught WHERE AppID = ?

-- Update SER 315
UPDATE Courses_Taught SET isSER315 = ? WHERE AppID = ?

-- Select SER 316
SELECT isSER316 FROM Courses_Taught WHERE AppID = ?

-- Update SER 316
UPDATE Courses_Taught SET isSER316 = ? WHERE AppID = ?

-- Select SER 321
SELECT isSER321 FROM Courses_Taught WHERE AppID = ?

-- Update SER 321
UPDATE Courses_Taught SET isSER321 = ? WHERE AppID = ?

-- Select SER 322
SELECT isSER322 FROM Courses_Taught WHERE AppID = ?

-- Update SER 322
UPDATE Courses_Taught SET isSER322 = ? WHERE AppID = ?

-- Select SER 334
SELECT isSER334 FROM Courses_Taught WHERE AppID = ?

-- Update SER 334
UPDATE Course_Competencies SET isSER334 = ? WHERE AppID = ?

-- Select SER 401
SELECT isSER401 FROM Courses_Taught WHERE AppID = ?

-- Update SER 401
UPDATE Courses_Taught SET isSER401 = ? WHERE AppID = ?

-- Select SER 402
SELECT isSER402 FROM Courses_Taught WHERE AppID = ?

-- Update SER 402
UPDATE Courses_Taught SET isSER402 = ? WHERE AppID = ?

-- Select SER 415
SELECT isSER415 FROM Courses_Taught WHERE AppID = ?

-- Update SER 415
UPDATE Courses_Taught SET isSER415 = ? WHERE AppID = ?

-- Select SER 416
SELECT isSER416 FROM Courses_Taught WHERE AppID = ?

-- Update SER 416
UPDATE Courses_Taught SET isSER416 = ? WHERE AppID = ?

-- Select SER 421
SELECT isSER421 FROM Courses_Taught WHERE AppID = ?

-- Update SER 421
UPDATE Courses_Taught SET isSER421 = ? WHERE AppID = ?

-- Select SER 423
SELECT isSER423 FROM Courses_Taught WHERE AppID = ?

-- Update SER 423
UPDATE Courses_Taught SET isSER423 = ? WHERE AppID = ?

-- Select Other
SELECT Other FROM Courses_Taught WHERE AppID = ?

-- Update Other
UPDATE Courses_Taught SET Other = ? WHERE AppID = ?
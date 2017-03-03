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

-- Languages Table

-- Insert Languages Table
INSERT INTO Languages SET?

-- Select Languages
SELECT * FROM Languages WHERE AppID = ?

-- Select C
SELECT isC, CLevel FROM Languages WHERE AppID = ?

-- Update C
UPDATE Languages SET isC = ? WHERE AppID = ?

-- Update C Level
UPDATE Languages SET CLevel = ? WHERE AppID = ?

-- Select C#
SELECT isCSharp, CSharpLevel FROM Languages WHERE AppID = ?

-- Update C#
UPDATE Languages SET isCSharp = ? WHERE AppID = ?

-- Update C# Level
UPDATE Languages SET CSharpLevel = ? WHERE AppID = ?

-- Select C++
SELECT isCPlusPlus, CPlusPlusLevel FROM Languages WHERE AppID = ?

-- Update C++
UPDATE Languages SET isCPlusPlus = ? WHERE AppID = ?

-- Update C++ Level
UPDATE Languages SET CPlusPlusLevel = ? WHERE AppID = ?

-- Select CSS
SELECT isCSS, CSSLevel FROM Languages WHERE AppID = ?

-- Update CSS
UPDATE Languages SET isCSS = ? WHERE AppID = ?

-- Update CSS Level
UPDATE Languages SET CSSLevel = ? WHERE AppID = ?

-- Select HTML
SELECT isHTML, HTMLLevel FROM Languages WHERE AppID = ?

-- Update HTML
UPDATE Languages SET isHTML = ? WHERE AppID = ?

-- Update HTML Level
UPDATE Languages SET HTMLLevel = ? WHERE AppID = ?

-- Select Java
SELECT isJava, JavaLevel FROM Languages WHERE AppID = ?

-- Update Java
UPDATE Languages SET isJava = ? WHERE AppID = ?

-- Update Java Level
UPDATE Languages SET JavaLevel = ? WHERE AppID = ?

-- Select Javascript
SELECT isJavascript, JavascriptLevel FROM Languages WHERE AppID = ?

-- Update Javascript
UPDATE Languages SET isJavascript = ? WHERE AppID = ?

-- Update Javascript Level
UPDATE Languages SET JavascriptLevel = ? WHERE AppID = ?

-- Select JSON
SELECT isJSON, JSONLevel FROM Languages WHERE AppID = ?

-- Update JSON
UPDATE Languages SET isJSON = ? WHERE AppID = ?

-- Update JSON Level
UPDATE Languages SET JSONLevel = ? WHERE AppID = ?

-- Select Scheme
SELECT isScheme, SchemeLevel FROM Languages WHERE AppID = ?

-- Update Scheme
UPDATE Languages SET isScheme = ? WHERE AppID = ?

-- Update Scheme Level
UPDATE Languages SET SchemeLevel = ? WHERE AppID = ?

-- Select PHP
SELECT isPHP, PHPLevel FROM Languages WHERE AppID = ?

-- Update PHP
UPDATE Languages SET isPHP = ? WHERE AppID = ?

-- Update PHP Level
UPDATE Languages SET PHPLevel = ? WHERE AppID = ?

-- Select PLP
SELECT isPLP, PLPLevel FROM Languages WHERE AppID = ?

-- Update PLP 
UPDATE Languages SET isPLP = ? WHERE AppID = ?

-- Update PLP Level
UPDATE Languages SET PLPLevel = ? WHERE AppID = ?

-- Select Prolog
SELECT isProlog, PrologLevel FROM Languages WHERE AppID = ?

-- Update Prolog
UPDATE Languages SET isProlog = ? WHERE AppID = ?

-- Update Prolog Level
UPDATE Languages SET PrologLevel = ? WHERE AppID = ?

-- Select Python
SELECT isPython, PythonLevel FROM Languages WHERE AppID = ?

-- Update Python
UPDATE Languages SET isPython = ? WHERE AppID = ?

-- Update Python Level
UPDATE Languages SET PythonLevel = ? WHERE AppID = ?

-- Select SQL
SELECT isSQL, SQLLevel FROM Languages WHERE AppID = ?

-- Update SQL
UPDATE Languages SET isSQL = ? WHERE AppID = ?

-- Update SQL Level
UPDATE Languages SET SQLLevel = ? WHERE AppID = ?

-- Select Swift
SELECT isSwift, SwiftLevel FROM Languages WHERE AppID = ?

-- Update Swift
UPDATE Languages SET isSwift = ? WHERE AppID = ?

-- Update Swift Level
UPDATE Languages SET SwiftLevel = ? WHERE AppID = ?

-- Select Verilog
SELECT isVerilog, VerilogLevel FROM Languages WHERE AppID = ?

-- Update Verilog
UPDATE Application SET isVerilog = ? WHERE AppID = ?

-- Update Verilog Level
UPDATE Languages SET VerilogLevel = ? WHERE AppID = ?

-- Select XML
SELECT isXML, XMLLevel FROM Languages WHERE AppID = ?

-- Update XML
UPDATE Languages SET isXML = ? WHERE AppID = ?

-- Update XML Level
UPDATE Languages SET XMLLevel = ? WHERE AppID = ?

-- Select Other
SELECT Other FROM Languages WHERE AppID = ?

-- Update Other
UPDATE Languages SET Other = ? WHERE AppID = ?

-- IDEs Table

-- Insert IDEs Table
INSERT INTO IDEs SET?

-- Select IDEs
SELECT * FROM IDEs WHERE AppID = ?

-- Select Android Studio
SELECT isAndroidStudio FROM IDEs WHERE AppID = ?

-- Update Android Studio
UPDATE IDEs SET isAndroidStudio = ? WHERE AppID = ?

-- Select Brackets
SELECT isBrackets FROM IDEs WHERE AppID = ?

-- Update Brackets
UPDATE IDEs SET isBrackets = ? WHERE AppID = ?

-- Select IntelliJ
SELECT isIntelliJ FROM IDEs WHERE AppID = ?

-- Update IntelliJ
UPDATE IDEs SET isIntelliJ = ? WHERE AppID = ?

-- Select NetBeans
SELECT isNetBeans FROM IDEs WHERE AppID = ?

-- Update NetBeans
UPDATE IDEs SET isNetBeans = ? WHERE AppID = ?

-- Select Xcode
SELECT isXcode FROM IDEs WHERE AppID = ?

-- Update Xcode
UPDATE IDEs SET isXcode = ? WHERE AppID = ?

-- Select Other
SELECT Other FROM IDEs WHERE AppID = ?

-- Update Other
UPDATE IDEs SET Other = ? WHERE AppID = ?

-- Collaborative Tools Table

-- Insert Collaborative Tools Table
INSERT INTO Collaborative_Tools SET?

-- Select Collaborative Tools
SELECT * FROM Collaborative_Tools WHERE AppID = ?

-- Select Github
SELECT isGithub FROM Collaborative_Tools WHERE AppID = ?

-- Update GitHub
UPDATE Collaborative_Tools SET isGitHub = ? WHERE AppID = ?

-- Select Taiga
SELECT isTaiga FROM Collaborative_Tools WHERE AppID = ?

-- Update Taiga
UPDATE Collaborative_Tools SET isTaiga = ? WHERE AppID = ?

-- Select Slack
SELECT isSlack FROM Collaborative_Tools WHERE AppID = ?

-- Update Slack
UPDATE Collaborative_Tools SET isSlack = ? WHERE AppID = ?

-- Select Other
SELECT Other FROM Collaborative_Tools WHERE AppID = ?

-- Update Other
UPDATE Collaborative_Tools SET Other = ? WHERE AppID = ?

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
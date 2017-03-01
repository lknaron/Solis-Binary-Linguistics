-- -----------------------------------------------------
-- Application Table
-- -----------------------------------------------------

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

-- Select Address One
SELECT AddressOne FROM Application WHERE ASURITE_ID = ?

-- Update Address One
UPDATE Application SET AddressOne = ? WHERE ASURITE_ID = ?

-- Select Address Two
SELECT AddressTwo FROM Application WHERE ASURITE_ID = ?

-- Update Address Two
UPDATE Application SET AddressTwo = ? WHERE ASURITE_ID = ?

-- Select Address Country
SELECT AddressCountry FROM Application WHERE ASURITE_ID = ?

-- Update Address Country
UPDATE Application SET AddressCountry = ? WHERE ASURITE_ID = ?

-- Select Address City
SELECT AddressCity FROM Application WHERE ASURITE_ID = ?

-- Update Address City
UPDATE Application SET AddressCity = ? WHERE ASURITE_ID = ?

-- Select Address State
SELECT AddressState FROM Application WHERE ASURITE_ID = ?

-- Update Address State
UPDATE Application SET AddressState = ? WHERE ASURITE_ID = ?

-- Select Address Zip
SELECT AddressZip FROM Application WHERE ASURITE_ID = ?

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

-- Select Speak Test
SELECT SpeakTest FROM Application WHERE ASURITE_ID = ?

-- Update Speak Test
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

-- Select Current Employer
SELECT CurrentEmployer FROM Application WHERE ASURITE_ID = ?

-- Update Current Employer 
UPDATE Application SET CurrentEmployer = ? WHERE ASURITE_ID = ?

-- Select Work Hours
SELECT WorkHours FROM Application WHERE ASURITE_ID = ?

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


-- -----------------------------------------------------
-- Calendar Table
-- -----------------------------------------------------

-- Insert Calendar Table
INSERT INTO Calendar SET?

-- Select Calendar
SELECT * FROM Calendar WHERE ASURITE_ID = ?

-- Update Calendar Name
UPDATE Calendar SET CalendarName = ? WHERE ASURITE_ID = ?

-- Update Calendar Day for Fall
UPDATE Calendar SET CalendarDay = ? WHERE CalendarName = 'Fall Semester' AND ASURITE_ID = ?

-- Update Calendar Day for Spring
UPDATE Calendar SET CalendarDay = ? WHERE CalendarName = 'Spring Semester' AND ASURITE_ID = ?

-- Update Calendar Day for Summer
UPDATE Calendar SET CalendarDay = ? WHERE CalendarName = 'Summer Semester' AND ASURITE_ID = ?

-- Update Start Hour for Fall on Monday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Monday' AND ASURITE_ID = ?

-- Update Start Hour for Fall on Tuesday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Tuesday' AND ASURITE_ID = ?

-- Update Start Hour for Fall on Wednesday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Wednesday' AND ASURITE_ID = ?

-- Update Start Hour for Fall on Thursday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Thursday' AND ASURITE_ID = ?

-- Update Start Hour for Fall on Friday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Friday' AND ASURITE_ID = ?

-- Update Start Hour for Spring on Monday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Monday' AND ASURITE_ID = ?

-- Update Start Hour for Spring on Tuesday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Tuesday' AND ASURITE_ID = ?

-- Update Start Hour for Spring on Wednesday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Wednesday' AND ASURITE_ID = ?

-- Update Start Hour for Spring on Thursday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Thursday' AND ASURITE_ID = ?

-- Update Start Hour for Spring on Friday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Friday' AND ASURITE_ID = ?

-- Update Start Hour for Summer on Monday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Monday' AND ASURITE_ID = ?

-- Update Start Hour for Summmer on Tuesday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Tuesday' AND ASURITE_ID = ?

-- Update Start Hour for Summer on Wednesday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Wednesday' AND ASURITE_ID = ?

-- Update Start Hour for Summer on Thursday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Thursday' AND ASURITE_ID = ?

-- Update Start Hour for Summer on Friday
UPDATE Calendar SET StartHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Friday' AND ASURITE_ID = ?

-- Update Stop Hour for Fall on Monday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Monday' AND ASURITE_ID = ?

-- Update Stop Hour for Fall on Tuesday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Tuesday' AND ASURITE_ID = ?

-- Update Stop Hour for Fall on Wednesday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Wednesday' AND ASURITE_ID = ?

-- Update Stop Hour for Fall on Thursday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Thursday' AND ASURITE_ID = ?

-- Update Stop Hour for Fall on Friday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Fall Semster' AND CalendarDay = 'Friday' AND ASURITE_ID = ?

-- Update Stop Hour for Spring on Monday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Monday' AND ASURITE_ID = ?

-- Update Stop Hour for Spring on Tuesday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Tuesday' AND ASURITE_ID = ?

-- Update Stop Hour for Spring on Wednesday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Wednesday' AND ASURITE_ID = ?

-- Update Stop Hour for Spring on Thursday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Thursday' AND ASURITE_ID = ?

-- Update Stop Hour for Spring on Friday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Spring Semster' AND CalendarDay = 'Friday' AND ASURITE_ID = ?

-- Update Stop Hour for Summer on Monday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Monday' AND ASURITE_ID = ?

-- Update Stop Hour for Summmer on Tuesday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Tuesday' AND ASURITE_ID = ?

-- Update Stop Hour for Summer on Wednesday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Wednesday' AND ASURITE_ID = ?

-- Update Stop Hour for Summer on Thursday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Thursday' AND ASURITE_ID = ?

-- Update Stop Hour for Summer on Friday
UPDATE Calendar SET StopHour = ? WHERE CalendarName = 'Summer Semster' AND CalendarDay = 'Friday' AND ASURITE_ID = ?


-- -----------------------------------------------------
-- Attachment Table
-- -----------------------------------------------------

-- Insert Attachment Table
INSERT INTO Attachment SET?

-- Select Attachment
SELECT * FROM Attachment WHERE ASURITE_ID = ?

-- Update Attachment Name
UPDATE Attachment SET AttachmentName = ? WHERE ASURITE_ID = ?

-- Update Attachment Type
UPDATE Attachment SET AttachmentType = ? WHERE ASURITE_ID = ?

-- Update Attachment Size
UPDATE Attachment SET AttachmentSize = ? WHERE ASURITE_ID = ?

-- Update Upload Date
UPDATE Attachment SET UploadDate = ? WHERE ASURITE_ID = ?


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


-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------

-- Insert Competencies Table
INSERT INTO Course_Competencies SET?

-- Select Course Compentencies Table
SELECT * FROM Course_Competencies WHERE ASURITE_ID = ?

-- Select ASU 101
SELECT isCourse = 'ASU 101', CourseTitle = 'The ASU Experience', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update ASU 101
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'ASU 101' AND CourseTitle = 'The ASU Experience' AND ASURITE_ID = ?

-- Select SER 421
SELECT isCourse = 'SER 421', CourseTitle = 'Web-Based Applications and Mobile Systems', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 421
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 421' AND CourseTitle = 'Web-Based Applications and Mobile Systems' AND ASURITE_ID = ?

-- Select FSE 100
SELECT isCourse = 'FSE 100', CourseTitle = 'Introduction to Engineering', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update FSE 100
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'FSE 100' AND CourseTitle = 'Introduction to Engineering' AND ASURITE_ID = ?

-- Select SER 422
SELECT isCourse = 'SER 422', CourseTitle = 'Web Application Programming', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 422
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 422' AND CourseTitle = 'Web Application Programming' AND ASURITE_ID = ?

-- Select CSE 110
SELECT isCourse = 'CSE 110', CourseTitle = 'Principles of Programming', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 110
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 110' AND CourseTitle = 'Principles of Programming' AND ASURITE_ID = ?

-- Select CSE 423
SELECT isCourse = 'CSE 423', CourseTitle = 'Systems Capstone Project I', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 423
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 423' AND CourseTitle = 'Systems Capstone Project I' AND ASURITE_ID = ?

-- Select CSE 120
SELECT isCourse = 'CSE 120', CourseTitle = 'Digital Design Fundamentals', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 120
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 120' AND CourseTitle = 'Digital Design Fundamentals' AND ASURITE_ID = ?

-- Select CSE 205
SELECT isCourse = 'CSE 205', CourseTitle = 'Object-Oriented Programming and Data Structures', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 205
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 205' AND CourseTitle = 'Object-Oriented Programming and Data Structures' AND ASURITE_ID = ?

-- Select SER 432
SELECT isCourse = 'SER 432', CourseTitle = 'Game Engine Architecture', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 432
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 432' AND CourseTitle = 'Game Engine Architecture' AND ASURITE_ID = ?

-- Select CSE 230
SELECT isCourse = 'CSE 230', CourseTitle = 'Computer Organization and Assembly Language Programming', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 230
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 230' AND CourseTitle = 'Computer Organization and Assembly Language Programming' AND ASURITE_ID = ?

-- Select SER 450
SELECT isCourse = 'SER 450', CourseTitle = 'Computer Architecture', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 450
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 450' AND CourseTitle = 'Computer Architecture' AND ASURITE_ID = ?

-- Select CSE 240
SELECT isCourse = 'CSE 240', CourseTitle = 'Introduction to Programming Languages', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 240
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 240' AND CourseTitle = 'Introduction to Programming Languages' AND ASURITE_ID = ?

-- Select SER 456
SELECT isCourse = 'SER 456', CourseTitle = 'Embedded Interfaces: Sensors and Actuators', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 456
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 456' AND CourseTitle = 'Embedded Interfaces: Sensors and Actuators' AND ASURITE_ID = ?

-- Select SER 215
SELECT isCourse = 'SER 215', CourseTitle = 'Software Enterprise: Personal Process', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 215
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 215' AND CourseTitle = 'Software Enterprise: Personal Process' AND ASURITE_ID = ?

-- Select SER 486
SELECT isCourse = 'SER 486', CourseTitle = 'Embedded C Programming', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 486
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 486' AND CourseTitle = 'Embedded C Programming' AND ASURITE_ID = ?

-- Select SER 216
SELECT isCourse = 'SER 216', CourseTitle = 'Software Enterprise: Testing and Quality', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 216
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 216' AND CourseTitle = 'Software Enterprise: Testing and Quality' AND ASURITE_ID = ?

-- Select SER 501
SELECT isCourse = 'SER 501', CourseTitle = 'Advanced Data Structures and Algorithms', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 501
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 501' AND CourseTitle = 'Advanced Data Structures and Algorithms' AND ASURITE_ID = ?

-- Select SER 222
SELECT isCourse = 'SER 222', CourseTitle = 'Design and Analysis of Data Structures and Algorithms', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 222
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 222' AND CourseTitle = 'Design and Analysis of Data Structures and Algorithms' AND ASURITE_ID = ?

-- Select SER 502
SELECT isCourse = 'SER 502', CourseTitle = 'Emerging Languages and Programming Paradigms', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 502
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 502' AND CourseTitle = 'Emerging Languages and Programming Paradigms' AND ASURITE_ID = ?

-- Select SER 315
SELECT isCourse = 'SER 315', CourseTitle = 'Software Enterprise: Design and Process', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 315
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 315' AND CourseTitle = 'Software Enterprise: Design and Process' AND ASURITE_ID = ?

-- Select SER 515
SELECT isCourse = 'SER 515', CourseTitle = 'Software Enterprise: Inception and Elaboration', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 515
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 515' AND CourseTitle = 'Software Enterprise: Inception and Elaboration' AND ASURITE_ID = ?

-- Select SER 316
SELECT isCourse = 'SER 316', CourseTitle = 'Software Enterprise: Construction and Transition', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 316
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 316' AND CourseTitle = 'Software Enterprise: Construction and Transition' AND ASURITE_ID = ?

-- Select SER 516
SELECT isCourse = 'SER 516', CourseTitle = 'Software Enterprise: Project and Process Management', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 516
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 516' AND CourseTitle = 'Software Enterprise: Project and Process Management' AND ASURITE_ID = ?

-- Select SER 321
SELECT isCourse = 'SER 321', CourseTitle = 'Principles of Distributed Software Systems', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 321
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 321' AND CourseTitle = 'Principles of Distributed Software Systems' AND ASURITE_ID = ?

-- Select SER 517
SELECT isCourse = 'SER 517', CourseTitle = 'Software Factory I', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 517
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 517' AND CourseTitle = 'Software Factory I' AND ASURITE_ID = ?

-- Select SER 322
SELECT isCourse = 'SER 322', CourseTitle = 'Principles of Database Management', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 322
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 322' AND CourseTitle = 'Principles of Database Management' AND ASURITE_ID = ?

-- Select SER 518
SELECT isCourse = 'SER 518', CourseTitle = 'Software Factory II', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 518
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 518' AND CourseTitle = 'Software Factory II' AND ASURITE_ID = ?

-- Select SER 332
SELECT isCourse = 'SER 332', CourseTitle = 'Introduction to Graphics and Game Development', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 332
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 332' AND CourseTitle = 'Introduction to Graphics and Game Development' AND ASURITE_ID = ?

-- Select CSE 563
SELECT isCourse = 'CSE 563', CourseTitle = 'Software Requirements and Specification', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 563
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 563' AND CourseTitle = 'Software Requirements and Specification' AND ASURITE_ID = ?

-- Select SER 334
SELECT isCourse = 'SER 334', CourseTitle = 'Operating Systems and Networks', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 334
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 334' AND CourseTitle = 'Operating Systems and Networks' AND ASURITE_ID = ?

-- Select CSE 564
SELECT isCourse = 'CSE 564', CourseTitle = 'Software Design', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 564
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 564' AND CourseTitle = 'Software Design' AND ASURITE_ID = ?

-- Select SER 401
SELECT isCourse = 'SER 401', CourseTitle = 'Computing Capstone Project I', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 401
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 401' AND CourseTitle = 'Computing Capstone Project I' AND ASURITE_ID = ?

-- Select CSE 566
SELECT isCourse = 'CSE 566', CourseTitle = 'Software Project, Process, and Quality Management', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update CSE 566
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'CSE 566' AND CourseTitle = 'Software Project, Process, and Quality Management' AND ASURITE_ID = ?

-- Select SER 402
SELECT isCourse = 'SER 402', CourseTitle = 'Computing Capstone Project II', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 402
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 402' AND CourseTitle = 'Computing Capstone Project II' AND ASURITE_ID = ?

-- Select SER 415
SELECT isCourse = 'SER 415', CourseTitle = 'Software Enterprise: Inception and Elaboration', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 415
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 415' AND CourseTitle = 'Software Enterprise: Inception and Elaboration' AND ASURITE_ID = ?

-- Select SER 416
SELECT isCourse = 'SER 416', CourseTitle = 'Software Enterprise: Project and Process Management', CourseSelect FROM Course_Competencies WHERE ASURITE_ID = ?

-- Update SER 416
UPDATE Course_Competencies SET CourseSelect = ? WHERE isCourse = 'SER 416' AND CourseTitle = 'Software Enterprise: Project and Process Management' AND ASURITE_ID = ?
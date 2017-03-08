-- Database Tables

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';

-- -----------------------------------------------------
-- User Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS User_ (
  ASURITE_ID VARCHAR(45) NOT NULL,
  FirstName VARCHAR(45) NOT NULL,
  MiddleName VARCHAR(45),
  LastName VARCHAR(45) NOT NULL,
  UserEmail VARCHAR(45) NOT NULL,
  UserPassword VARCHAR(200) NOT NULL,
  UserRole VARCHAR(45) NOT NULL,
  RegTime TIMESTAMP NOT NULL,
  isActive TINYINT(1)  NOT NULL,
  LoginTime TIMESTAMP NOT NULL,
  PRIMARY KEY (ASURITE_ID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Offer Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Offer (
  OfferID INT NOT NULL AUTO_INCREMENT,
  isOfferAccept TINYINT(1) DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (OfferID),
  CONSTRAINT offer_fk FOREIGN KEY (ASURITE_ID)
  REFERENCES User_ (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Student Evaluation Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Student_Evaluation (
  EvaluationID INT NOT NULL AUTO_INCREMENT,
  DateCreated TIMESTAMP,
  QOneScore INT NOT NULL,
  QOneComments VARCHAR(500) DEFAULT NULL,
  QTwoScore INT NOT NULL,
  QTwoComments VARCHAR(500) DEFAULT NULL,
  QThreeScore INT NOT NULL,
  QThreeComments VARCHAR(500) DEFAULT NULL,
  QFourScore INT NOT NULL,
  QFourComments VARCHAR(500) DEFAULT NULL,
  ASURITE_ID_1 VARCHAR(45) NOT NULL,
  ASURITE_ID_2 VARCHAR(45) NOT NULL,
  PRIMARY KEY (EvaluationID),
  CONSTRAINT student_evaluation_fk_1 FOREIGN KEY (ASURITE_ID_1) 
  REFERENCES User_ (ASURITE_ID),
  CONSTRAINT student_evaluation_fk_2 FOREIGN KEY (ASURITE_ID_2) 
  REFERENCES User_ (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Schedule Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Schedule_ (
  ScheduleID INT NOT NULL AUTO_INCREMENT,
  SessionIs VARCHAR(1),
  Location VARCHAR(45),
  Subject VARCHAR(3),
  CatalogNumber INT,
  CourseNumber INT UNSIGNED,
  CourseTitle VARCHAR(45),
  Days VARCHAR(45),
  StartHours TIME,
  EndHours TIME,
  FirstName VARCHAR(45),
  LastName VARCHAR(45),
  AssignedStatus ENUM ('Complete', 'Incomplete'),
  TARequiredHours INT,
  GraderRequiredHours INT,
  EnrollmentNumPrev INT,
  PRIMARY KEY (ScheduleID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Student Request Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Student_Request (
  RequestID INT NOT NULL AUTO_INCREMENT,
  DateCreated TIMESTAMP,
  ScheduleID INT NOT NULL,
  Rank1 VARCHAR(45) NOT NULL,
  Rank2 VARCHAR(45),
  PRIMARY KEY (RequestID),
  CONSTRAINT student_request_fk_1 FOREIGN KEY (ScheduleID) 
  REFERENCES Schedule_ (ScheduleID),
  CONSTRAINT student_request_fk_2 FOREIGN KEY (Rank1) 
  REFERENCES User_ (ASURITE_ID),
  CONSTRAINT student_request_fk_3 FOREIGN KEY (Rank2) 
  REFERENCES User_ (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Placement Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Placement (
  PlaceID INT NOT NULL AUTO_INCREMENT,
  TA VARCHAR(45),
  TAStatus ENUM ('Temporary', 'Pending', 'Confirmed'),
  GraderOne VARCHAR(45),
  GraderOneStatus ENUM ('Temporary', 'Pending', 'Confirmed'),
  GraderTwo VARCHAR(45),
  GraderTwoStatus ENUM ('Temporary', 'Pending', 'Confirmed'),
  TAHours INT,
  GraderOneHours INT,
  GraderTwoHours INT,
  ScheduleID INT NOT NULL,
  PRIMARY KEY (PlaceID),
  CONSTRAINT placement_fk_1 FOREIGN KEY (ScheduleID) 
  REFERENCES Schedule_ (ScheduleID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Enrollment Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Enrollment (
 EnrollmentID INT NOT NULL AUTO_INCREMENT,
 EnrollmentNumCurrent INT,
 DateEntered Date,
 ScheduleID INT NOT NULL, 
 PRIMARY KEY (EnrollmentID),
 CONSTRAINT enrollment_fk FOREIGN KEY (ScheduleID)
 REFERENCES Schedule_ (ScheduleID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Application Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Application (
  AppID INT NOT NULL AUTO_INCREMENT,
  PhoneNumber VARCHAR(12) DEFAULT NULL,
  MobileNumber VARCHAR(12) DEFAULT NULL,
  AddressOne VARCHAR(45) DEFAULT NULL,
  AddressTwo VARCHAR(45) DEFAULT NULL,
  AddressCountry VARCHAR(45) DEFAULT NULL,
  AddressCity VARCHAR(45) DEFAULT NULL,
  AddressState VARCHAR(45) DEFAULT NULL,
  AddressZip INT DEFAULT NULL,
  EducationLevel VARCHAR(45) DEFAULT NULL,
  GPA DECIMAL(4,2) DEFAULT NULL,
  DegreeProgram VARCHAR(45) DEFAULT NULL,
  isAcademicProbation TINYINT(1) DEFAULT NULL,
  isFourPlusOne TINYINT(1) DEFAULT NULL,
  isInternationalStudent TINYINT(1) DEFAULT NULL,
  SpeakTest INT DEFAULT NULL,
  FirstSession DATE DEFAULT NULL,
  GraduationDate VARCHAR(20) DEFAULT NULL,
  TimeCommitment ENUM ('20 hours per week', '10 hours per week') DEFAULT NULL,
  isTA TINYINT(1) DEFAULT NULL,
  isGrader TINYINT(1) DEFAULT NULL,
  CurrentEmployer VARCHAR(45) DEFAULT NULL,
  WorkHours INT DEFAULT NULL,
  isWorkedASU TINYINT(1) DEFAULT NULL,
  AppStatus VARCHAR(45) DEFAULT NULL,
  DateCreated TIMESTAMP,
  DateSubmitted TIMESTAMP,
  ModifiedDate TIMESTAMP,
  isContactComplete TINYINT(1) DEFAULT NULL,
  isEducationComplete TINYINT(1) DEFAULT NULL,
  isEmploymentComplete TINYINT(1) DEFAULT NULL,
  isAvailabilityComplete TINYINT(1) DEFAULT NULL,
  isLanguagesComplete TINYINT(1) DEFAULT NULL,
  isCoursesComplete TINYINT(1) DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (AppID),
  CONSTRAINT application_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES User_ (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Calendar Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Calendar (
  CalendarID INT NOT NULL AUTO_INCREMENT,
  CalendarName ENUM ('Fall Semester', 'Summer Semester', 'Spring Semester'),
  CalendarDay ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'),
  StartHour TIME,
  StopHour TIME,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (CalendarID),
  CONSTRAINT calendar_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Attachment Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Attachment (
  AttachmentID INT NOT NULL AUTO_INCREMENT,
  AttachmentName VARCHAR(45) NOT NULL,
  AttachmentType VARCHAR(45) NOT NULL,
  AttachmentSize INT NOT NULL,
  UploadDate TIMESTAMP NOT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (AttachmentID),
  CONSTRAINT attachment_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Languages (
  LanguagesID INT NOT NULL AUTO_INCREMENT,
  isLanguage ENUM ('C', 'C++', 'CSS', 'HTML', 'Java', 'JavaScript', 'JSON', 'Python',
  'SQL', 'Swift', 'Verilog', 'XML') DEFAULT NULL,
  LanguageLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  OtherLanguage VARCHAR(45) DEFAULT NULL,
  OtherLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (LanguagesID),
  CONSTRAINT languages_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- IDEs Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS IDEs (
  IDEid INT NOT NULL AUTO_INCREMENT,
  isIDE ENUM ('Android Studio', 'Brackets', 'IntelliJ', 'NetBeans', 'Xcode') DEFAULT NULL,
  OtherIDE VARCHAR(45) DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (IDEid),
  CONSTRAINT ides_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Collaborative Tools Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Collaborative_Tools (
  ToolID INT NOT NULL AUTO_INCREMENT,
  isTool ENUM ('GitHub', 'Taiga', 'Slack') DEFAULT NULL,
  OtherTool VARCHAR(45) DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (ToolID),
  CONSTRAINT collaborative_tools_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Course_Competencies (
  CompetenciesID INT NOT NULL AUTO_INCREMENT,
  isCourse ENUM ('ASU 101', 'SER 421', 'FSE 100', 'SER 422', 'CSE 110', 
  'CSE 423', 'CSE 120', 'CSE 205', 'SER 432', 'CSE 230', 'SER 450', 
  'CSE 240', 'SER 456', 'SER 215', 'SER 486', 'SER 216', 'SER 501', 
  'SER 222', 'SER 502', 'SER 315', 'SER 515', 'SER 316', 'SER 516', 
  'SER 321', 'SER 517', 'SER 322', 'SER 518', 'SER 332', 'CSE 563', 
  'SER 334', 'CSE 564', 'SER 401', 'CSE 566', 'SER 402', 'SER 415', 
  'SER 416') DEFAULT NULL,
  CourseTitle ENUM (
  'The ASU Experience', 
  'Web-Based Applications and Mobile Systems', 
  'Introduction to Engineering', 
  'Web Application Programming', 
  'Principles of Programming', 
  'Systems Capstone Project I', 
  'Digital Design Fundamentals', 
  'Object-Oriented Programming and Data Structures', 
  'Game Engine Architecture', 
  'Computer Organization and Assembly Language Programming', 
  'Computer Architecture', 
  'Introduction to Programming Languages', 
  'Embedded Interfaces: Sensors and Actuators', 
  'Software Enterprise: Personal Process', 
  'Embedded C Programming', 
  'Software Enterprise: Testing and Quality', 
  'Advanced Data Structures and Algorithms', 
  'Design and Analysis of Data Structures and Algorithms', 
  'Emerging Languages and Programming Paradigms', 
  'Software Enterprise: Design and Process', 
  'Software Enterprise: Inception and Elaboration', 
  'Software Enterprise: Construction and Transition', 
  'Software Enterprise: Project and Process Management', 
  'Principles of Distributed Software Systems', 
  'Software Factory I', 
  'Principles of Database Management', 
  'Software Factory II', 
  'Introduction to Graphics and Game Development', 
  'Software Requirements and Specification', 
  'Operating Systems and Networks', 
  'Software Design',
  'Computing Capstone Project I', 
  'Software Project, Process, and Quality Management', 
  'Computing Capstone Project II', 
  'Software Enterprise: Inception and Elaboration', 
  'Software Enterprise: Project and Process Management') DEFAULT NULL,
  CourseSelect ENUM ('Prefer', 'Qualified', 'Previously TA', 'Previously Grader')  DEFAULT NULL,
  OtherCourse VARCHAR(45) DEFAULT NULL,
  OtherSelect ENUM ('Prefer', 'Qualified', 'Previously TA', 'Previously Grader')  DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (CompetenciesID),
  CONSTRAINT course_compentencies_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
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
  Units INT,
  Days VARCHAR(45),
  StartHours TIME,
  EndHours TIME,
  FirstName VARCHAR(45),
  LastName VARCHAR(45),
  PRIMARY KEY (ScheduleID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Student Request Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Student_Request (
  RequestID INT NOT NULL AUTO_INCREMENT,
  DateCreated TIMESTAMP,
  ScheduleID INT NOT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (RequestID),
  CONSTRAINT student_request_fk_1 FOREIGN KEY (ScheduleID) 
  REFERENCES Schedule_ (ScheduleID),
  CONSTRAINT student_request_fk_2 FOREIGN KEY (ASURITE_ID) 
  REFERENCES User_ (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Placement Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Placement (
  PlaceID INT NOT NULL AUTO_INCREMENT,
  EnrollmentNumPrev INT,
  EnrollmentNumCurrent INT,
  EnrollmentDiff INT,
  TA VARCHAR(45),
  GraderOne VARCHAR(45),
  GraderTwo VARCHAR(45),
  TAHours INT,
  GraderOneHours INT,
  GraderTwoHours INT,
  ScheduleID INT NOT NULL,
  PRIMARY KEY (PlaceID),
  CONSTRAINT placement_fk FOREIGN KEY (ScheduleID) 
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
  AppStatus VARCHAR(45) DEFAULT NULL,
  DateCreated TIMESTAMP,
  DateSubmitted TIMESTAMP,
  ModifiedDate TIMESTAMP,
  LastSaved VARCHAR(100),
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
  CalendarDay ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
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
  isC TINYINT(1) DEFAULT NULL,
  CLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isCSharp TINYINT(1) DEFAULT NULL,
  CSharpLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isCPlusPlus TINYINT(1) DEFAULT NULL,
  CPlusPlusLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isCSS TINYINT(1) DEFAULT NULL,
  CSSLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isHTML TINYINT(1) DEFAULT NULL,
  HTMLLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isJava TINYINT(1) DEFAULT NULL,
  JavaLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isJavascript TINYINT(1) DEFAULT NULL,
  JavascriptLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isJSON TINYINT(1) DEFAULT NULL,
  JSONLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isScheme TINYINT(1) DEFAULT NULL,
  SchemeLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isPHP TINYINT(1) DEFAULT NULL,
  PHPLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isPLP TINYINT(1) DEFAULT NULL,
  PLPLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isProlog TINYINT(1) DEFAULT NULL,
  PrologLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isPython TINYINT(1) DEFAULT NULL,
  PythonLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isSQL TINYINT(1) DEFAULT NULL,
  SQLLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isSwift TINYINT(1) DEFAULT NULL,
  SwiftLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isVerilog TINYINT(1) DEFAULT NULL,
  VerilogLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  isXML TINYINT(1) DEFAULT NULL,
  XMLLevel ENUM ('Expert', 'Proficient', 'Novice') DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
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
  isAndroidStudio TINYINT(1),
  isBrackets TINYINT(1) DEFAULT NULL,
  isIntelliJ TINYINT(1) DEFAULT NULL,
  isNetBeans TINYINT(1) DEFAULT NULL,
  isXcode TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100)DEFAULT NULL,
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
  isGitHub TINYINT(1) DEFAULT NULL,
  isTaiga TINYINT(1) DEFAULT NULL,
  isSlack TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
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
  isCSE110 TINYINT(1) DEFAULT NULL,
  isCSE205 TINYINT(1) DEFAULT NULL,
  isCSE230 TINYINT(1) DEFAULT NULL,
  isCSE240 TINYINT(1) DEFAULT NULL,
  isCSE120 TINYINT(1) DEFAULT NULL,
  isFSE100 TINYINT(1) DEFAULT NULL,
  isASU101 TINYINT(1) DEFAULT NULL,
  isSER422 TINYINT(1) DEFAULT NULL,
  isSER450 TINYINT(1) DEFAULT NULL,
  isSER456 TINYINT(1) DEFAULT NULL,
  isSER486 TINYINT(1) DEFAULT NULL,
  isSER332 TINYINT(1) DEFAULT NULL,
  isSER431 TINYINT(1) DEFAULT NULL,
  isSER432 TINYINT(1) DEFAULT NULL,
  isSER515 TINYINT(1) DEFAULT NULL,
  isSER516 TINYINT(1) DEFAULT NULL,
  isSER501 TINYINT(1) DEFAULT NULL,
  isSER502 TINYINT(1) DEFAULT NULL,
  isSER517 TINYINT(1) DEFAULT NULL,
  isSER518 TINYINT(1) DEFAULT NULL,
  isCSE563 TINYINT(1) DEFAULT NULL,
  isCSE564 TINYINT(1) DEFAULT NULL,
  isCSE566 TINYINT(1) DEFAULT NULL,
  isSER215 TINYINT(1) DEFAULT NULL,
  isSER216 TINYINT(1) DEFAULT NULL,
  isSER222 TINYINT(1) DEFAULT NULL,
  isSER315 TINYINT(1) DEFAULT NULL,
  isSER316 TINYINT(1) DEFAULT NULL,
  isSER321 TINYINT(1) DEFAULT NULL,
  isSER322 TINYINT(1) DEFAULT NULL,
  isSER334 TINYINT(1) DEFAULT NULL,
  isSER401 TINYINT(1) DEFAULT NULL,
  isSER402 TINYINT(1) DEFAULT NULL,
  isSER415 TINYINT(1) DEFAULT NULL,
  isSER416 TINYINT(1) DEFAULT NULL,
  isSER421 TINYINT(1) DEFAULT NULL,
  isSER423 TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (CompetenciesID),
  CONSTRAINT course_compentencies_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Courses Taught Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Courses_Taught (
  TaughtID INT NOT NULL AUTO_INCREMENT,
  isCSE110 TINYINT(1) DEFAULT NULL,
  isCSE205 TINYINT(1) DEFAULT NULL,
  isCSE230 TINYINT(1) DEFAULT NULL,
  isCSE240 TINYINT(1) DEFAULT NULL,
  isCSE120 TINYINT(1) DEFAULT NULL,
  isFSE100 TINYINT(1) DEFAULT NULL,
  isASU101 TINYINT(1) DEFAULT NULL,
  isSER422 TINYINT(1) DEFAULT NULL,
  isSER450 TINYINT(1) DEFAULT NULL,
  isSER456 TINYINT(1) DEFAULT NULL,
  isSER486 TINYINT(1) DEFAULT NULL,
  isSER332 TINYINT(1) DEFAULT NULL,
  isSER431 TINYINT(1) DEFAULT NULL,
  isSER432 TINYINT(1) DEFAULT NULL,
  isSER515 TINYINT(1) DEFAULT NULL,
  isSER516 TINYINT(1) DEFAULT NULL,
  isSER501 TINYINT(1) DEFAULT NULL,
  isSER502 TINYINT(1) DEFAULT NULL,
  isSER517 TINYINT(1) DEFAULT NULL,
  isSER518 TINYINT(1) DEFAULT NULL,
  isCSE563 TINYINT(1) DEFAULT NULL,
  isCSE564 TINYINT(1) DEFAULT NULL,
  isCSE566 TINYINT(1) DEFAULT NULL,
  isSER215 TINYINT(1) DEFAULT NULL,
  isSER216 TINYINT(1) DEFAULT NULL,
  isSER222 TINYINT(1) DEFAULT NULL,
  isSER315 TINYINT(1) DEFAULT NULL,
  isSER316 TINYINT(1) DEFAULT NULL,
  isSER321 TINYINT(1) DEFAULT NULL,
  isSER322 TINYINT(1) DEFAULT NULL,
  isSER334 TINYINT(1) DEFAULT NULL,
  isSER401 TINYINT(1) DEFAULT NULL,
  isSER402 TINYINT(1) DEFAULT NULL,
  isSER415 TINYINT(1) DEFAULT NULL,
  isSER416 TINYINT(1) DEFAULT NULL,
  isSER421 TINYINT(1) DEFAULT NULL,
  isSER423 TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (TaughtID),
  CONSTRAINT courses_taught_fk FOREIGN KEY (ASURITE_ID) 
  REFERENCES Application (ASURITE_ID)
  ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
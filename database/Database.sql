-- Database Tables

-- -----------------------------------------------------
-- User Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS User_ (
  ASURITE_ID VARCHAR(45) NOT NULL,
  FirstName VARCHAR(45) NOT NULL,
  MiddleName VARCHAR(45) NOT NULL,
  LastName VARCHAR(45) NOT NULL,
  UserEmail VARCHAR(45) NOT NULL,
  UserPassword VARCHAR(45) NOT NULL,
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
  isOfferAccept TINYINT(1) NOT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (OfferID),
  FOREIGN KEY (ASURITE_ID)
    REFERENCES User_ (ASURITE_ID)
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
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (EvaluationID),
  FOREIGN KEY (ASURITE_ID)
    REFERENCES User_ (ASURITE_ID)
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
  FOREIGN KEY (ScheduleID)
    REFERENCES Schedule_ (ScheduleID),
  FOREIGN KEY (ASURITE_ID)
    REFERENCES User_ (ASURITE_ID)
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
  FOREIGN KEY (ScheduleID)
    REFERENCES Schedule_ (ScheduleID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Application Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Application (
  AppID INT NOT NULL AUTO_INCREMENT,
  PhoneNumber VARCHAR(12),
  MobileNumber VARCHAR(12),
  AddressOne VARCHAR(45),
  AddressTwo VARCHAR(45),
  AddressCountry VARCHAR(45),
  AddressCity VARCHAR(45),
  AddressState VARCHAR(45),
  AddressZip INT,
  EducationLevel VARCHAR(45),
  GPA DECIMAL(4,2),
  DegreeProgram VARCHAR(45),
  isAcademicProbation TINYINT(1),
  isFourPlusOne TINYINT(1),
  isInternationalStudent TINYINT(1),
  SpeakTest INT,
  FirstSession DATE,
  GraduationDate VARCHAR(20),
  TimeCommitment VARCHAR(20),
  TAPosition VARCHAR(2),
  GraderPostion VARCHAR(6),
  CurrentEmployer VARCHAR(45),
  WorkHours INT,
  AppStatus VARCHAR(45),
  DateCreated TIMESTAMP,
  DateSubmitted TIMESTAMP,
  ModifiedDate TIMESTAMP,
  LastSaved VARCHAR(100),
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (AppID),
  FOREIGN KEY (ASURITE_ID)
    REFERENCES User_ (ASURITE_ID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Calendar Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Calendar (
  CalendarID INT NOT NULL AUTO_INCREMENT,
  CalendarName VARCHAR(20),
  CalendarDay VARCHAR(20),
  CalendarHour VARCHAR(20),
  AppID INT NOT NULL,
  PRIMARY KEY (CalendarID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
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
  AppID INT NOT NULL,
  PRIMARY KEY (AttachmentID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Languages (
  LanguagesID INT NOT NULL AUTO_INCREMENT,
  isC TINYINT(1) DEFAULT NULL,
  isCSharp TINYINT(1) DEFAULT NULL,
  isCPlusPlus TINYINT(1) DEFAULT NULL,
  isCSS TINYINT(1) DEFAULT NULL,
  isHTML TINYINT(1) DEFAULT NULL,
  isJava TINYINT(1) DEFAULT NULL,
  isJavascript TINYINT(1) DEFAULT NULL,
  isJSON TINYINT(1) DEFAULT NULL,
  isScheme TINYINT(1) DEFAULT NULL,
  isPHP TINYINT(1) DEFAULT NULL,
  isPLP TINYINT(1) DEFAULT NULL,
  isProlog TINYINT(1) DEFAULT NULL,
  isPython TINYINT(1) DEFAULT NULL,
  isSQL TINYINT(1) DEFAULT NULL,
  isSwift TINYINT(1) DEFAULT NULL,
  isVerilog TINYINT(1) DEFAULT NULL,
  isXML TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
  LanguageLevel VARCHAR(10),
  AppID INT NOT NULL,
  PRIMARY KEY (LanguagesID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

-- -----------------------------------------------------
-- IDEs Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS IDEs (
  IDEid INT NOT NULL AUTO_INCREMENT,
  isAndriodStudio TINYINT(1),
  isBrackets TINYINT(1) DEFAULT NULL,
  isIntelliJ TINYINT(1) DEFAULT NULL,
  isNetBeans TINYINT(1) DEFAULT NULL,
  isXcode TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100)DEFAULT NULL,
  AppID INT NOT NULL,
  PRIMARY KEY (IDEid),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
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
  AppID INT NOT NULL,
  PRIMARY KEY (ToolID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
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
  AppID INT NOT NULL,
  PRIMARY KEY (CompetenciesID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
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
  AppID INT NOT NULL,
  PRIMARY KEY (TaughtID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;
-- Database Tables

DEFAULT CHARACTER SET utf8;

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
  Active TINYINT(1)  NOT NULL,
  LoginTime TIMESTAMP NOT NULL,
  PRIMARY KEY (ASURITE_ID)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Offer Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Offer (
  OfferID INT NOT NULL AUTO_INCREMENT,
  OfferAccept TINYINT(1) NOT NULL,
  ASURITE_ID VARCHAR(45) NOT NULL,
  PRIMARY KEY (OfferID),
  FOREIGN KEY (ASURITE_ID)
    REFERENCES User_ (ASURITE_ID)
) ENGINE = InnoDB;

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
) ENGINE = InnoDB;

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
) ENGINE = InnoDB;

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
) ENGINE = InnoDB;

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
) ENGINE = InnoDB;

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
  AcademicProbation TINYINT(1),
  FourPlusOne TINYINT(1),
  InternationalStudent TINYINT(1),
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
) ENGINE = InnoDB;

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
) ENGINE = InnoDB;

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
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Languages Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Languages (
  LanguageID INT NOT NULL AUTO_INCREMENT,
  isC TINYINT(1) DEFAULT NULL,
  CSharp TINYINT(1) DEFAULT NULL,
  isC++ TINYINT(1) DEFAULT NULL,
  CSS TINYINT(1) DEFAULT NULL,
  HTML TINYINT(1) DEFAULT NULL,
  Java TINYINT(1) DEFAULT NULL,
  Javascript TINYINT(1) DEFAULT NULL,
  JSON TINYINT(1) DEFAULT NULL,
  Scheme TINYINT(1) DEFAULT NULL,
  PHP TINYINT(1) DEFAULT NULL,
  PLP TINYINT(1) DEFAULT NULL,
  Prolog TINYINT(1) DEFAULT NULL,
  Python TINYINT(1) DEFAULT NULL,
  isSQL TINYINT(1) DEFAULT NULL,
  Swift TINYINT(1) DEFAULT NULL,
  Verilog TINYINT(1) DEFAULT NULL,
  XML TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
  LanguageLevel VARCHAR(10),
  AppID INT NOT NULL,
  PRIMARY KEY (LanguageID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- IDEs Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS IDEs (
  IDEid INT NOT NULL AUTO_INCREMENT,
  AndriodStudio TINYINT(1),
  Brackets TINYINT(1) DEFAULT NULL,
  IntelliJ TINYINT(1) DEFAULT NULL,
  NetBeans TINYINT(1) DEFAULT NULL,
  Xcode TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100)DEFAULT NULL,
  AppID INT NOT NULL,
  PRIMARY KEY (IDEid),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Collaborative Tools Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Collaborative_Tools (
  ToolID INT NOT NULL AUTO_INCREMENT,
  GitHub TINYINT(1) DEFAULT NULL,
  Taiga TINYINT(1) DEFAULT NULL,
  Slack TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
  AppID INT NOT NULL,
  PRIMARY KEY (ToolID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Course Competencies Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Course_Competencies (
  CompetenciesID INT NOT NULL AUTO_INCREMENT,
  CSE110 TINYINT(1) DEFAULT NULL,
  CSE205 TINYINT(1) DEFAULT NULL,
  CSE230 TINYINT(1) DEFAULT NULL,
  CSE240 TINYINT(1) DEFAULT NULL,
  CSE120 TINYINT(1) DEFAULT NULL,
  FSE100 TINYINT(1) DEFAULT NULL,
  ASU101 TINYINT(1) DEFAULT NULL,
  SER422 TINYINT(1) DEFAULT NULL,
  SER450 TINYINT(1) DEFAULT NULL,
  SER456 TINYINT(1) DEFAULT NULL,
  SER486 TINYINT(1) DEFAULT NULL,
  SER332 TINYINT(1) DEFAULT NULL,
  SER431 TINYINT(1) DEFAULT NULL,
  SER432 TINYINT(1) DEFAULT NULL,
  SER515 TINYINT(1) DEFAULT NULL,
  SER516 TINYINT(1) DEFAULT NULL,
  SER501 TINYINT(1) DEFAULT NULL,
  SER502 TINYINT(1) DEFAULT NULL,
  SER517 TINYINT(1) DEFAULT NULL,
  SER518 TINYINT(1) DEFAULT NULL,
  CSE563 TINYINT(1) DEFAULT NULL,
  CSE564 TINYINT(1) DEFAULT NULL,
  CSE564 TINYINT(1) DEFAULT NULL,
  CSE566 TINYINT(1) DEFAULT NULL,
  SER215 TINYINT(1) DEFAULT NULL,
  SER216 TINYINT(1) DEFAULT NULL,
  SER222 TINYINT(1) DEFAULT NULL,
  SER315 TINYINT(1) DEFAULT NULL,
  SER316 TINYINT(1) DEFAULT NULL,
  SER321 TINYINT(1) DEFAULT NULL,
  SER322 TINYINT(1) DEFAULT NULL,
  SER332 TINYINT(1) DEFAULT NULL,
  SER334 TINYINT(1) DEFAULT NULL,
  SER401 TINYINT(1) DEFAULT NULL,
  SER402 TINYINT(1) DEFAULT NULL,
  SER415 TINYINT(1) DEFAULT NULL,
  SER416 TINYINT(1) DEFAULT NULL,
  SER421 TINYINT(1) DEFAULT NULL,
  SER423 TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
  AppID INT NOT NULL,
  PRIMARY KEY (CompetenciesID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Courses Taught Table
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Courses_Taught (
  CompetenciesID INT NOT NULL AUTO_INCREMENT,
  CSE110 TINYINT(1) DEFAULT NULL,
  CSE205 TINYINT(1) DEFAULT NULL,
  CSE230 TINYINT(1) DEFAULT NULL,
  CSE240 TINYINT(1) DEFAULT NULL,
  CSE120 TINYINT(1) DEFAULT NULL,
  FSE100 TINYINT(1) DEFAULT NULL,
  ASU101 TINYINT(1) DEFAULT NULL,
  SER422 TINYINT(1) DEFAULT NULL,
  SER450 TINYINT(1) DEFAULT NULL,
  SER456 TINYINT(1) DEFAULT NULL,
  SER486 TINYINT(1) DEFAULT NULL,
  SER332 TINYINT(1) DEFAULT NULL,
  SER431 TINYINT(1) DEFAULT NULL,
  SER432 TINYINT(1) DEFAULT NULL,
  SER515 TINYINT(1) DEFAULT NULL,
  SER516 TINYINT(1) DEFAULT NULL,
  SER501 TINYINT(1) DEFAULT NULL,
  SER502 TINYINT(1) DEFAULT NULL,
  SER517 TINYINT(1) DEFAULT NULL,
  SER518 TINYINT(1) DEFAULT NULL,
  CSE563 TINYINT(1) DEFAULT NULL,
  CSE564 TINYINT(1) DEFAULT NULL,
  CSE564 TINYINT(1) DEFAULT NULL,
  CSE566 TINYINT(1) DEFAULT NULL,
  SER215 TINYINT(1) DEFAULT NULL,
  SER216 TINYINT(1) DEFAULT NULL,
  SER222 TINYINT(1) DEFAULT NULL,
  SER315 TINYINT(1) DEFAULT NULL,
  SER316 TINYINT(1) DEFAULT NULL,
  SER321 TINYINT(1) DEFAULT NULL,
  SER322 TINYINT(1) DEFAULT NULL,
  SER332 TINYINT(1) DEFAULT NULL,
  SER334 TINYINT(1) DEFAULT NULL,
  SER401 TINYINT(1) DEFAULT NULL,
  SER402 TINYINT(1) DEFAULT NULL,
  SER415 TINYINT(1) DEFAULT NULL,
  SER416 TINYINT(1) DEFAULT NULL,
  SER421 TINYINT(1) DEFAULT NULL,
  SER423 TINYINT(1) DEFAULT NULL,
  Other VARCHAR(100) DEFAULT NULL,
  AppID INT NOT NULL,
  PRIMARY KEY (CompetenciesID),
  FOREIGN KEY (AppID)
    REFERENCES Application (AppID)
) ENGINE = InnoDB;
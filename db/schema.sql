DROP DATABASE IF EXISTS toast_db;
CREATE DATABASE toast_db;

USE toast_DB;

CREATE TABLE eventDetails
(	eventId int NOT NULL AUTO_INCREMENT,
	groomName varchar(50) NOT NULL,
    brideName varchar(50) NOT NULL,
    venueName varchar(50) NOT NULL,
    venueAddress varchar(80) NOT NULL,
    eventDate varchar(50) NOT NULL,
	PRIMARY KEY (eventId)
);

CREATE TABLE guestList
(	guestId int NOT NULL AUTO_INCREMENT,
    guestName varchar(50) NOT NULL,
    guestEmail varchar(50) NOT NULL,
    rsvpStatus varchar(50) DEFAULT "Awaiting response" NOT NULL,
    plusOne BOOLEAN DEFAULT false NOT NULL,
    dateSent TIMESTAMP(0) NOT NULL,
    eventId int NOT NULL,
	PRIMARY KEY (guestId),
    FOREIGN KEY (eventId)
    REFERENCES eventDetails(eventId)
    ON DELETE CASCADE
);

SELECT * FROM eventDetails
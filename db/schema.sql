DROP DATABASE IF EXISTS toast_db;
CREATE DATABASE toast_db;

USE toast_DB;
CREATE TABLE guestlist
(	guest_id int NOT NULL AUTO_INCREMENT,
	event_name varchar(50) NOT NULL,
    sender varchar(50) NOT NULL,
    venue_name varchar(80) NOT NULL,
    venue_address varchar(150) NOT NULL,
    date_time datetime(0) NOT NULL,
    guest_name varchar(50) NOT NULL,
    guest_email varchar(50) NOT NULL,
	PRIMARY KEY (guest_id)
);

CREATE TABLE rsvps
(	rsvp_id int NOT NULL AUTO_INCREMENT,
    guest_id int,  
    rsvp_status varchar(50) NOT NULL,
    plus_one BOOLEAN DEFAULT false NOT NULL,
    INDEX par_ind (rsvp_id),
	PRIMARY KEY (rsvp_id),
    CONSTRAINT fk_guest FOREIGN KEY (guest_id)
    REFERENCES guestlist(guest_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

-- SELECT g.guest_name, g.guest_email, g.date_time, r.plus_one, r.rsvp_status 
--     FROM guestlist g   
--         JOIN rsvps r 
--         ON g.guest_id = r.guest_id
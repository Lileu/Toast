INSERT INTO guestlist (
    event_name,
    sender,
    venue_name,
    venue_address,
    date_time,
    guest_name,
    guest_email)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

     int NOT NULL AUTO_INCREMENT,
	 varchar(50) NOT NULL,
     BOOLEAN DEFAULT false,
     varchar(80) NOT NULL,
     varchar(150) NOT NULL,
     datetime(0); NOT NULL,
     varchar(50) NOT NULL,
     varchar(50) NOT NULL,
	PRIMARY KEY (guest_id)
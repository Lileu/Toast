-- guestlist seed data

INSERT INTO eventDetails (
    groomName,
    brideName,
    venueName,
    venueAddress,
    eventDate
)

VALUES (
    'Mr Fantastic', 
    'Sue Storm',
    'The Carousel',
    'Albert Park Lakes',
    '2020-08-19 13:45:00'
);

INSERT INTO guestList (	
	guestName,
    guestEmail,
    rsvpStatus,
    plusOne,
    dateSent,
    eventId
)

VALUES (
    'Jen Jones',
    'JenJones@gmail.com',
    'Attending',
    true,
    '2019-12-21 18:30:00',
    '1'
);

INSERT INTO guestList (	
	guestName,
    guestEmail,
    rsvpStatus,
    plusOne,
    dateSent,
    eventId
)

VALUES (
    'Nick Morris',
    'Nimo@gmail.com',
    'Attending',
    false,
    '2019-12-21 18:30:00',
    '1'
);


INSERT INTO guestList (	
	guestName,
    guestEmail,
    rsvpStatus,
    plusOne,
    dateSent,
    eventId
)

VALUES (
    'Jason Jackson',
    'Jaseeeeeeee@hotmail.com',
    'Not attending',
    false,
    '2019-12-21 18:30:00',
    '1'
);
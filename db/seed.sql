-- guestlist seed data

INSERT INTO guestlist (
    event_name,
    sender,
    venue_name,
    venue_address,
    date_time,
    guest_name,
    guest_email
    )
VALUES (
    'Jens 21st', 
    'Jen Jones',
    'Base Lounge & Bar',
    'Selwyn Lane, Melbourne VIC',
    '2019-12-21 18:30:00',
    'Jonathan',
    'JonJay@gmail.com'
);

INSERT INTO guestlist (
    event_name,
    sender,
    venue_name,
    venue_address,
    date_time,
    guest_name,
    guest_email
    )
VALUES (
    'Jens 21st', 
    'Jen Jones',
    'Base Lounge & Bar',
    'Selwyn Lane, Melbourne VIC',
    '2019-12-21 18:30:00',
    'Alison',
    'A.Lison@gmail.com'
    );

INSERT INTO guestlist (
    event_name,
    sender,
    venue_name,
    venue_address,
    date_time,
    guest_name,
    guest_email
    )
VALUES (
    'Jens 21st', 
    'Jen Jones',
    'Base Lounge & Bar',
    'Selwyn Lane, Melbourne VIC',
    '2019-12-21 18:30:00',
    'Matty',
    'MattySmith@hotmail.com'
    );

INSERT INTO guestlist (
    event_name,
    sender,
    venue_name,
    venue_address,
    date_time,
    guest_name,
    guest_email
    )
VALUES (
    'Jens 21st', 
    'Jen Jones',
    'Base Lounge & Bar',
    'Selwyn Lane, Melbourne VIC',
    '2019-12-21 18:30:00',
    'Shane',
    'Shano@gmail.com'
    );

-- rsvp seed data

INSERT INTO rsvps (
    guest_id,
    rsvp_status,
    plus_one
)
VALUES (
    '2', 
    'attending',
    0
);


INSERT INTO rsvps (
    guest_id,
    rsvp_status,
    plus_one
)
VALUES (
    '3', 
    'attending',
    1
);

INSERT INTO rsvps (
    guest_id,
    rsvp_status,
    plus_one
)
VALUES (
    '4', 
    'attending',
    0
);

INSERT INTO rsvps (
    guest_id,
    rsvp_status,
    plus_one
)
VALUES (
    '5', 
    'not attending',
    0
);
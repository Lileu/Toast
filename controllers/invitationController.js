var express = require("express");

var invitationRouter = express.Router();

// Import the model (tracking.js) to use its database functions.
var eventDetail = require("../models1/eventDetail.js");

var guestList = require('../models1/guestList.js')

// Create all our routes and set up logic within those routes where required.
invitationRouter.post("/api/invitation1", function (req, res) {

    eventDetail
        .create(req.body)
        .then(function(result) {
            var eventId = result.insertId;
            
            var resultGuests = [];
            var guests = req.body.guests;

            for (var i = 0; i < guests.length; i++) {
                resultGuests.push(guestList.create(eventId, guests[i]));
            }

            Promise
                .all(resultGuests)
                .then(function() {
                    res.json({ id: eventId });
                });
        });
    
});


module.exports = invitationRouter;
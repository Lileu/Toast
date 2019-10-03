var express = require("express");

var router = express.Router();

// Import the model (tracking.js) to use its database functions.
var invitation = require("../models1/invitation1.js/index.js");

invitationRouter.post("/api/eventDetails", function (req, res) {
    invitation.create([ 
        "groomName", 
        "brideName", 
        "venueName", 
        "venueAddress", 
        "eventDate"
    ], [
        req.body.groom_name, 
        req.body.brides_name, 
        req.body.venue_name, 
        req.body.venue_address, 
        req.body.date_time 
    ], function(result) {
        res.json({
            id:result.insertId
        });
    });
});

module.exports = invitationRouter;
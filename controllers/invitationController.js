var express = require("express");

var invitationRouter = express.Router();

// Import the model (tracking.js) to use its database functions.
var invitation = require("../models1/invitation1.js");

// Create all our routes and set up logic within those routes where required.
invitationRouter.post("/api/invitation1", function (req, res) {
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
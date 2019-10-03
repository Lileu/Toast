var express = require("express");

var invitationRouter2 = express.Router();

// Import the model (tracking.js) to use its database functions.
var invitation = require("../models1/invitation2.js");

// Create all our routes and set up logic within those routes where required.
invitationRouter2.post("/api/invitation2", function (req, res) {
    invitation.create([ 
        "guest_name", 
        "guest_email"
    ], [
        req.body.groom_name, 
        req.body.brides_name,
    ], function(result) {
        res.json({
            id:result.insertId
        });
    });
});

module.exports = invitationRouter2;


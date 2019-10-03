var express = require("express");

var router = express.Router();

// Import the model (tracking.js) to use its database functions.
var invitation = require("../models1/invitation1.js/index.js");

router.post("/api/eventDetails", function (req, res) {
    invitation.create([ 
        "grooms-name", 
        "brides-name", 
        "venue-name", 
        "venue-address", 
        "date-time"
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


// router.post("/api/cats", function (req, res) {
//     cat.create([
//         "name", "sleepy"
//     ], [
//         req.body.name, req.body.sleepy
//     ], function (result) {
//         // Send back the ID of the new quote
//         res.json({
//             id: result.insertId
//         });
//     });
// });
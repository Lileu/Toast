var express = require("express");

var router = express.Router();

// Import the model (tracking.js) to use its database functions.
var invitation = require("../models1/invitation2.js/index.js");

router.post("/api/guestList", function (req, res) {
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
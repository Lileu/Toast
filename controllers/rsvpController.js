var express = require("express");

var rsvpRouter = express.Router();

// Import the model (tracking.js) to use its database functions.
var guestList = require("../models1/guestList.js");

// Create all our routes and set up logic within those routes where required.
rsvpRouter.put("/api/rsvp/:id", function (req, res) {
  guestList.update(req.params.id, {
    rsvpStatus: req.body.rsvpStatus,
    plusOne: req.body.plusOne
  }).then(function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();   
  });
});

// Export routes for server.js to use.
module.exports = rsvpRouter;
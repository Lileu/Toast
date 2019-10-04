var express = require("express");

var trackingRouter = express.Router();

// Import the model (tracking.js) to use its database functions.
var guestList = require("../models1/guestList.js");

// Create all our routes and set up logic within those routes where required.
trackingRouter.get("/api/tracking/:id", function (req, res) {
  guestList.
    forEvent(req.params.id)
    .then(function(result) {
      res.json(result);
    });
});


// Export routes for server.js to use.
module.exports = trackingRouter;
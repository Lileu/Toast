var express = require("express");

var trackingRouter = express.Router();

// Import the model (tracking.js) to use its database functions.
var tracking = require("../models1/tracking.js");

// Create all our routes and set up logic within those routes where required.
trackingRouter.get("/", function (req, res) {
  tracking.selectAll(function (data) {
    var hbsObject = {
      trackings: data
    };
    console.log(hbsObject);
    res.render("tracking", hbsObject);
  });
});


// Export routes for server.js to use.
module.exports = trackingRouter;
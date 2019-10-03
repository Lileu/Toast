var express = require("express");

var router = express.Router();

// Import the model (tracking.js) to use its database functions.
var rsvp = require("../models1/rsvp.js");

// Create all our routes and set up logic within those routes where required.
router.put("/api/rsvp/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  rsvp.update({
    rsvpStatus: req.body.rsvpStatus,
    plusOne: req.body.plusOne
  },
  condition,
  function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();   
  });
});

// Export routes for server.js to use.
module.exports = router;
var express = require("express");

var router = express.Router();

// Import the model (tracking.js) to use its database functions.
var tracking = require("../config/tracking.js/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  tracking.all(function (data) {
    var hbsObject = {
      trackings: data
    };
    console.log(hbsObject);
    res.render("tracking", hbsObject);
  });
});

router.post("/api/trackings", function (req, res) {
  tracking.create([
    [
      ["event_name", "sender", "venue_name", "venue_address", "guest_name", "guest_email"],
      req.body.event_name, req.body.sender, req.body.venue_name, req.body.venue_address, req.body.guest_name, req.body.guest_email
    ],
  ], function (result) {
    res.json({
      guest_id: result.insertId
    });
  });
});

router.put("/api/trackings/:id", function (req, res) {
  var condition = "id = " + req.params.guest_id;

  console.log("condition", condition);

  tracking.update({
    rsvp_status: req.body.rsvp_status
  }, condition, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/trackings/:id", function (req, res) {
  var condition = "id = " + req.params.guest_id;

  tracking.delete(condition, function (result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
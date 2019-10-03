// Use path for relative routes to HTML files
var path = require("path");

// Require custom middleware to see if user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

var db = require("../models");

module.exports = function (app) {

  // Load members page if user has logged in
  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/invitation");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Authentication route
  // If user has not logged in, will be redirected to signup page
  app.get("/invitation", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/invitation.html"));
  });
  app.get("/rsvp", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/rsvp.html"));
  });
  app.get("/tracking", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/tracking.html"));
  });
};

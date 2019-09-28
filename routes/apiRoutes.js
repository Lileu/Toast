var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  // Getting user data
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // Sends back empty object if user is not logged in
      res.json({});
    }
    else {
      // If logged in, sends back user's email and id
      res.json({
        email: req.user.email,
        id: req.user.redirect
      })
    }
  });

  // Logging the user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Use passport.authenticate middleware with local strategy
  // Go to members page if logged in successfully
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json("/members");
    });
  });

  // User signup - if successful, they can enter the site. 
  // If not, will send an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (error) {
      console.log(error);
      res.json(error);
    })
  })

  // Facebook authentication
  app.get("/auth/facebook", passport.authenticate("facebook"));

  // After authentication, will redirect the user.
  // Gets access token 
  app.get("/auth/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "/members",
    failureRedirect: "/api/signup"
  }));

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};

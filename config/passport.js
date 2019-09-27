// Install authentication packages
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Tells passport to use Local Strategy - login via email/username and password
passport.use(new LocalStrategy(
   {
      usernameField: "email"
   },
   function (email, password, done) {
      db.User.findOne({
         where: {
            email: email
         }
      }).then(function (dbUser) {
         // If a user with that email does not exist
         if (!dbUser) {
            return done(null, false, {
               message: "Email does not exist."
            });
         }
         // If there is a user with the correct email but incorrect password
         else if (!dbUser.validPassword(password)) {
            return done(null, false, {
               message: "Password is incorrect."
            });
         }
         return done(null, dbUser);
      })
   }
));

// Keeps authentication state across HTTP requests, sequelize needs to serialise and deserialise user
passport.serializeUser(function (user, cb) {
   cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
   cb(null, obj);
});

module.exports = passport;
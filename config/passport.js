// Install authentication packages
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();

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

// Tells passport to use Facebook Strategy - login via Facebook
passport.use(new FacebookStrategy({
   clientID: process.env.FBAPP_ID,
   clientSecret: process.env.FBAPP_SECRET,
   callbackURL: "http://localhost:3000/auth/facebook/callback"
},
   function (accessToken, refreshToken, profile, done) {
      User.findOne({
         // Searches the user table to see if there is anyone with a facebook ID with profile.id
         "facebook.id": profile.id
      }, function (error, user) {
         if (error) {
            return done(error);
         }
         // No user found, create new user
         if (!user) {
            user = new User({
               name: profile.displayName,
               email: profile.emails[0].value,
               username: profile.username,
               provider: "facebook",
               // Searches table for facebook id for future logins
               facebook: profile._json
            });
            user.save(function (error) {
               if (error)
                  console.log(error);
               return done(error, user);
            });
         }
         // If the user has been found
         else {
            return done(error, user);
         }
      })
      console.log(profile);
   }
))

// Keeps authentication state across HTTP requests, sequelize needs to serialise and deserialise user
passport.serializeUser(function (user, cb) {
   cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
   cb(null, obj);
});

module.exports = passport;
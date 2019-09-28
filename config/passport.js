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
      });
   }
));

// Tells passport to use Facebook Strategy - login via Facebook
passport.use(new FacebookStrategy({
   clientID: process.env.FBAPP_ID,
   clientSecret: process.env.FBAPP_SECRET,
   callbackURL: "http://localhost:3000/auth/facebook/callback"
},
   function (accessToken, refreshToken, profile, done) {
      db.User.findOne({
         // Searches the user table to see if there is anyone with a facebook ID with profile.id
         where: {
            "facebook_id": profile.id
         }
      })
         .then(dbUser => {
            // No user found, create new user
            if (!dbUser) {
               console.log("Creating user for", profile.id)
               console.log(profile)
               user = new db.User({
                  name: profile.displayName,
                  username: profile.username,
                  provider: "facebook",
                  // Searches table for facebook id for future logins
                  facebook: profile._json
               });
               user.save().then(function (user) {
                  console.log("User created, user")
                  return done(null, user);
               }).catch((error) => {
                  console.log("Could not create user", error)
                  done(error, null)
               });
            }
            // If the user has been found
            else {
               console.log("user found");
               return done(error, user);
            }
         })
         .catch(error => {
            return done(error);
         });
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
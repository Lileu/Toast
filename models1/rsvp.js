var orm = require("./orm.js");

var rsvp = {
  update: function (objColVals, condition, cb) {
    orm.update("trackings", objColVals, condition, function (res) {
      cb(res);
    });
  }
};


// Export the database functions for the controller (rsvpController.js).
module.exports = rsvp;

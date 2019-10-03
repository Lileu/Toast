var orm = require("../config/orm.js");

var rsvp = {
  update: function (objColVals, condition, cb) {
    orm.update("rsvpStatus", objColVals, condition, function (res) {
      cb(res);
    });
  }
};


// Export the database functions for the controller (rsvpController.js).
module.exports = rsvp;

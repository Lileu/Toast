// Import the ORM to create functions that will interact with the database.
var orm = require("./orm.js");

var tracking = {
  all: function (cb) {
    orm.all("trackings", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("trackings", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("trackings", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("trackings", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (trackingsController.js).
module.exports = tracking;

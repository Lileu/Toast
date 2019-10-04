// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var tracking = {
  selectAll: function (cb) {
    orm.selectAll("trackings", function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (trackingsController.js).
module.exports = tracking;

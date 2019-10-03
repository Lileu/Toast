// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var invitation = {

  insertOne: function (cols, vals, cb) {
    orm.insertOne("guestList", cols, vals, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = invitation;



var orm = require("../config/orm.js");

var invitation = {

  insertOne: function (cols, vals, cb) {
    orm.insertOne("guestList", cols, vals, function (res) {
      cb(res);
    });
  }
};

module.exports = invitation;



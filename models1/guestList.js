// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

var guestList = {
  create: function (eventId, data) {
    var event = {
      groomName: "",
      brideName: "",
      venueName: "",
      venueAddress: "",
      eventDate: currentTime,
      ...data,
    };

    var cols = [
      "eventId",
      "guestName",
      "guestEmail",
      "dateSent",
    ]

    var vals = [
      eventId,
      data.name,
      data.email,
      currentTime,
    ];

    return new Promise(function (resolve, reject) {
      orm.insertOne("guestList", cols, vals, function (res) {
        resolve(res);
      });
    })
  },
};

// Export the database functions for the controller
module.exports = guestList;



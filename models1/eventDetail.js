// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

var eventDetail = {

  create: function(data) {
    var event = {
      groomName: "",
      brideName: "",
      venueName: "",
      venueAddress: "",
      eventDate: currentTime,
      ...data,
    };

    var cols = [
        "groomName",
        "brideName",
        "venueName",
        "venueAddress",
        "eventDate"
      ]

    var vals = [
        data.groomName,
        data.brideName,
        data.venueName,
        data.venueAddress,
        data.eventDate,
    ];

    return new Promise(function(resolve, reject) {
      orm.insertOne("eventDetails", cols, vals, function (res) {
        resolve(res);
      });
    })

   
  }
};

// Export the database functions for the controller
module.exports = eventDetail;



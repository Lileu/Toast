// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var TABLE_NAME = 'guestList';

var currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');


var guestList = {

  forEvent: function(eventId) {
    return new Promise(function(resolve, reject) {
      var condition = 'eventId = ' + eventId;
      orm.selectWhere(TABLE_NAME, condition, function(res) {
        resolve(res);
      });
    });
  },
  
  update: function(guestId, data) {
    var condition = 'guestId = ' + guestId;
    return new Promise(function(resolve, reject) {
      orm.updateOne(TABLE_NAME, data, condition, function(res) {
        resolve(res);
      });
    });
  },

  create: function (eventId, data) {
    var event = {
      groomName: '',
      brideName: '',
      venueName: '',
      venueAddress: '',
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
      orm.insertOne(TABLE_NAME, cols, vals, function (res) {
        resolve(res);
      });
    })
  },
};

// Export the database functions for the controller
module.exports = guestList;



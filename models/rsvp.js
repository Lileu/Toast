var orm = require ("../config/orm.js");

var rsvp = {

    updateOne: function(objColVals, condition, cb) {
        console.log("ORM", objColVals, condition)
        orm.updateOne("guest")
    }
}
// COPIED FROM BURGER PROJECT - NEEDS TO BE MODIFIED

// MySQL connection setup
var mysql = require("mysql");,

// If the server contains the JAWSDB_URL environmental variable, it	connects to	the	JawsDB database.
if (process.env.JAWDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
// If	the	server	lacks	the	variable,	it	falls	back	on	an	explicitly	defined	local	database
else {
  connection = mysql.createConnection({``
    host: "fugfonv8odxxolj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "c479ryog95osp3wj",
    password: "ou79t6p6d8fl00bz",
    database: "p9ob3m4kwccldre8"
});
};

// Establish connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
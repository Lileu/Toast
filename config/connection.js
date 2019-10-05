// MySQL connection setup
var mysql = require("mysql");

// If the server contains the JAWSDB_URL environmental variable, it	connects to	the	JawsDB database.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
// If	the	server	lacks	the	variable,	it	falls	back	on	an	explicitly	defined	local	database
else {
  connection = mysql.createConnection({
    host: "jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "roodvdh5bp8q5pvd2xot",
    password: "rwszosnavg6h6asdboot",
    database: "dwvx5eazn0ttvtej"
  });
}

// Establish connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
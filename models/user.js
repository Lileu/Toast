// Require bcrypt for password hashing for data privacy
var bcrypt = require("bcryptjs");


// Create user model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // Password not nullable
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Create custom method for user model
  // Checks if unhashed password matches hashed password in database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};

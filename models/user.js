// Require bcrypt for password hashing for data privacy
var bcrypt = require("bcryptjs");


// Create user model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // Password not nullable
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  // Create custom method for user model
  // Checks if unhashed password matches hashed password in database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Before User is created, password will be automatically hashed
  User.beforeCreate(user => {
    if (user.email) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
      );
    }
  })

  return User;
};

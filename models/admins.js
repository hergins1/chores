module.exports = function(sequelize, DataTypes) {
  var Admins = sequelize.define("Admins", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Admins;
};

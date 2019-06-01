module.exports = function(sequelize, DataTypes) {
  var Households = sequelize.define("Households", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Households;
};

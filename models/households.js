module.exports = function(sequelize, DataTypes) {
  var Households = sequelize.define("Households", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // }
  });

  Households.associate = function(models) {
    Households.hasMany(models.Users, {
      onDelete: "cascade"
    });
  };

  return Households;
};

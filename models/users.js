module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Users.associate = function(models) {
    Users.belongsTo(models.Households, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Users.associate = function(models) {
    Users.hasMany(models.Chores, {
      onDelete: "cascade"
    });
  };

  return Users;
};

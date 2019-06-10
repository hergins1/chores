module.exports = function (sequelize, DataTypes) {
  var Chores = sequelize.define("Chores", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    due: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Chores.associate = function (models) {
    Chores.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Chores;
};

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
      defaultValue: 0,
      validate: {
        len: [1]
      }
    },
    due: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
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
        allowNull: false,
        defaultValue: 1
      }
    });
  };

  return Chores;
};

module.exports = function(sequelize, DataTypes) {
  var Chores = sequelize.define("Chores", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    created: {
      // TIMESTAMP: https://github.com/sequelize/sequelize/issues/9363
      type: "TIMESTAMP",
      allowNull: false
    },
    due: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Chores.associate = function(models) {
    Chores.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Chores;
};

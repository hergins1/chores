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
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: false
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

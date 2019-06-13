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
      defaultValue: true
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
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        len: [1]
      }
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: true
    }
  });

  Users.associate = function(models) {
    Users.belongsTo(models.Households, {
      foreignKey: {
        allowNull: false,
        defaultValue: 1
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

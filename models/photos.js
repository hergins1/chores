module.exports = function(sequelize, DataTypes) {
  var Photos = sequelize.define("Photos", {
    // type: {
    //   type: DataTypes.STRING
    // },
    data: {
      type: DataTypes.BLOB("long")
    }
  });

  Photos.associate = function(models) {
    Photos.belongsTo(models.Chores, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Photos;
};

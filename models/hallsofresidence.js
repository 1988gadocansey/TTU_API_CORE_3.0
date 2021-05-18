const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hallsofresidence', {
    HALL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RES: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hallsofresidence',
    timestamps: false
  });
};

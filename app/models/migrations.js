const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migrations', {
    migration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    batch: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'migrations',
    timestamps: false
  });
};

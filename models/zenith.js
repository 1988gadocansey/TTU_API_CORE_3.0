const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zenith', {
    A: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    B: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'zenith',
    timestamps: false
  });
};

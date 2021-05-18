const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('current_year_settings', {
    current_acad_yr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    current_sem: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'current_year_settings',
    timestamps: false
  });
};

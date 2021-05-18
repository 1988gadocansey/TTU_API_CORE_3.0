const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programme_options', {
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OPTIONS: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'programme_options',
    timestamps: false
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gradingsystem', {
    GRADINGTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    KIND: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gradingsystem',
    timestamps: false
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classparameters', {
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASS1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINCREDITS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRADINGTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DURATION: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'classparameters',
    timestamps: false
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addresses', {
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE6: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'addresses',
    timestamps: false
  });
};

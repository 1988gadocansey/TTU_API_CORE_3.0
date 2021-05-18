const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reports', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      primaryKey: true
    },
    reportname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reportcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reportorder: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    typeofrep: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reports',
    timestamps: false
  });
};

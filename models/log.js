const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    USERNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FIELDAFFECTED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTIONTAKEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OLDVALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NEWVALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTIONTIME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COURSENAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COMPUTERNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COMPUTERIPADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEM: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log',
    timestamps: false
  });
};

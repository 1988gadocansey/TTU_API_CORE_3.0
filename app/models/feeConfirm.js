const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FeeConfirm', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    STUDENT: {
      type: DataTypes.STRING(100),
      allowNull: false,

    },
    AMOUNT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BANK_DATE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    newDate: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FeeConfirm',
    timestamps: false,

  });
};

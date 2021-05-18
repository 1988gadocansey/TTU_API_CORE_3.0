const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feedetails', {
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FEES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TRANSDATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PAYMENTTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PAYMENTDETAILS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ENTRYDATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ENTRYTIME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USERNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BANK: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PAYMENTPLACE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RECEIPTNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACADYEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TRANSACTIONTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEM: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feedetails',
    timestamps: false
  });
};

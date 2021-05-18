const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FeePayment', {
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
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    PROGRAMME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LEVEL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AMOUNT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NO_COPIES: {
      type: DataTypes.INTEGER,
      allowNull: true,

    },
    PAYMENTTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PAYMENTDETAILS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BANK: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BANK_DATE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TRANSACTION_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RECEIPTNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FEE_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEMESTER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RECIEPIENT: {
      type: DataTypes.STRING(222),
      allowNull: true
    },
    TRANSDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      //defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    CHECKER: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    VERIFY: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0"
    },
    TRANS_PRINT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'FeePayment',
    timestamps: false,
    indexes: [

      {
        name: "myindex3",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STUDENT" },
          { name: "AMOUNT" },
          { name: "BANK_DATE" },
          { name: "FEE_TYPE" },
        ]
      },
      {
        name: "myindexss",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STUDENT" },
          { name: "AMOUNT", length: 10 },
          { name: "BANK_DATE", length: 12 },
          { name: "TRANSACTION_ID", length: 12 },
          { name: "YEAR" },
        ]
      },
    ]
  });
};

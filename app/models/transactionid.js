const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransactionId', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    applicant: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    transactionID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    used: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "new"
    },
    updated_at: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'TransactionId',
    timestamps: false,
    indexes: [

    ]
  });
};

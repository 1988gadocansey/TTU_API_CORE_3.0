const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receiptno', {
    RECEIPTNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COLLEGECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACADYEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receiptno',
    timestamps: false
  });
};

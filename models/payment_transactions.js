const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_transactions', {
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    receiptno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_type: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    balancebf: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    cot: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    balance: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    client_id: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    sold_by: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dates: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment_transactions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "receiptno" },
        ]
      },
    ]
  });
};

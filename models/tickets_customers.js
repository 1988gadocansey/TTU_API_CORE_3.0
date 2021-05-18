const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tickets_customers', {
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    receiptno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,1),
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
    tableName: 'tickets_customers',
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
      {
        name: "receiptno",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "receiptno" },
        ]
      },
    ]
  });
};

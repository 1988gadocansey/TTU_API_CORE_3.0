const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etickets', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date_sold: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sold_by: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    receiptno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dates: {
      type: DataTypes.DATE,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,1),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    branch_id: {
      type: DataTypes.STRING(200),
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
    tableName: 'etickets',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_serial_pin",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pin" },
          { name: "company_id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_product', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "school fees, voucher, eticket, etc"
    },
    payment_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    account_no: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.STRING(90),
      allowNull: false,
      comment: "continues,one time"
    },
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    payment_info: {
      type: DataTypes.STRING(9000),
      allowNull: false
    },
    accept_part_payment: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    default_value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    cot: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    currency: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    payment_period: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    usage_instruction: {
      type: DataTypes.STRING(900),
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
    tableName: 'payment_product',
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
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "company_id" },
          { name: "purpose" },
          { name: "payment_name" },
        ]
      },
    ]
  });
};

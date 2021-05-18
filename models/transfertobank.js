const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfertobank', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    bankId: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    bankaccountno: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    branch: {
      type: DataTypes.STRING(700),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10,1),
      allowNull: false
    },
    dates: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(90),
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
    tableName: 'transfertobank',
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
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('depositreminder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clientId: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    medium: {
      type: DataTypes.STRING(200),
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
    payinference: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    dates_of_deposit: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    merchant: {
      type: DataTypes.STRING(700),
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
    tableName: 'depositreminder',
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_clients', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clientId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "clientId"
    },
    stuid: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    pas: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    day: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    month: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    validator: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date_created: {
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
    tableName: 'temp_clients',
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
        name: "clientId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clientId" },
        ]
      },
    ]
  });
};

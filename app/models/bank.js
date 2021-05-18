const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bank', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "NAME"
    },
    ACCOUNT_NUMBER: {
      type: DataTypes.STRING(222),
      allowNull: false,
      unique: "NAME"
    },
    CREATED_AT: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    UPDATED_AT: {
      type: DataTypes.STRING(222),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Bank',
    timestamps: false,
    indexes: [

      {
        name: "ACCOUNT_NUMBER",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ACCOUNT_NUMBER" },
        ]
      },
      {
        name: "NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NAME" },
          { name: "ACCOUNT_NUMBER" },
        ]
      },
    ]
  });
};

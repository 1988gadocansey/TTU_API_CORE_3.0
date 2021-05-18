const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    username1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pass: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    security: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateadded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'users',
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_email_setting', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMAIL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SENDER: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    NOTIFICATION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    YEAR: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_email_setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};

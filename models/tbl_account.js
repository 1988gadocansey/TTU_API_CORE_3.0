const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_account', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    FNAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LNAME: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PHONE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FORM_NO: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PIN: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    SERIAL: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    FINALIZED: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LOGIN_COUNTER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ACTOR: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    TYPE: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    STATUS_REASONS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    FORM_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    COUNTRY: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    INPUTEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'tbl_account',
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

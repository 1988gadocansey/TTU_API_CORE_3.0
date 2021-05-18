const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_report_snapshot', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    YEAR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    REPORT_TYPE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TOTAL_CASSET: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TOTAL_FASSET: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TOTAL_CLIABILITIES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TOTAL_LLIABILTIES: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TOTAL_CAPITAL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TAX: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PROFIT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_report_snapshot',
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

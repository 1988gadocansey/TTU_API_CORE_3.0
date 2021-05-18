const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_biodata11', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_FORM: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "APP_FORM"
    }
  }, {
    sequelize,
    tableName: 'tbl_biodata11',
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
      {
        name: "APP_FORM",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APP_FORM" },
        ]
      },
    ]
  });
};

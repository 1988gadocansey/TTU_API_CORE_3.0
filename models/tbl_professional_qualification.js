const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_professional_qualification', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_FORM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TYPE_EXAM: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    YEAR: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PROGRAMME: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    GRADE: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_professional_qualification',
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
          { name: "PROGRAMME" },
        ]
      },
    ]
  });
};

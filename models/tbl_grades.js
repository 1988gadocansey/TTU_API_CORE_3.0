const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_grades', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_FORM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EXAM_TYPE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    GRADE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    YEAR: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_grades',
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

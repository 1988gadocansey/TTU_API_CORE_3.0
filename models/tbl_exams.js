const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_exams', {
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
    SUBJECT: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    GRADE: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    SITTING: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    EXAM_TYPE: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    INDEX_NO: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    GRADE_VALUE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    YEAR: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MONTH: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_exams',
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
          { name: "SUBJECT" },
          { name: "INDEX_NO" },
        ]
      },
    ]
  });
};

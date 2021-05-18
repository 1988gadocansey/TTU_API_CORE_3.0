const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COLLEGECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FACCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEPTCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    STNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SURNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FIRSTNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NAME2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEX: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DATEOFBIRTH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YEAROFADMISSION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OPTIONS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASS1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HALL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TELEPHONENO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PICTURE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SSN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADMISSIONTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COUNTRY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REGION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMAIL2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PASS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINCREDITS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GHA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTOR: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'students',
    timestamps: false,
    indexes: [
      {
        name: "STNO",
        using: "BTREE",
        fields: [
          { name: "STNO" },
        ]
      },
      {
        name: "INDEXNO",
        using: "BTREE",
        fields: [
          { name: "INDEXNO" },
        ]
      },
    ]
  });
};

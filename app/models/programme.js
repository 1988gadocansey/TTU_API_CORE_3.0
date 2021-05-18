const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Programme', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DEPTCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "PROGRAMMECODE"
    },
    PROGRAMME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AFFILAITION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DURATION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINCREDITS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MAXI_CREDIT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GRADING_SYSTEM: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    SLUG: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SHOW_ON_PORTAL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    RUNNING: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1 means running,0 means not running"
    },
    TYPE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RESULT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    HND_CODE: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "none",
      comment: "hnd index no auto generate code"
    },
    COMBINEDCODE: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "used to show evening and regular as one program"
    },
    COMBINEDEPT: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "to solve welding plant issue"
    },
    SESSION: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "regular"
    }
  }, {
    sequelize,
    tableName: 'Programme',
    timestamps: false,
    indexes: [

      {
        name: "PROGRAMMECODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PROGRAMMECODE" },
        ]
      },
    ]
  });
};

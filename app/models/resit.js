const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Resit', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    course: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    student: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indexno: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    quiz1: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true,
      defaultValue: 0.0
    },
    quiz2: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true,
      defaultValue: 0.0
    },
    quiz3: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true,
      defaultValue: 0.0
    },
    midSem1: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true,
      defaultValue: 0.0
    },
    exam: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "0.00"
    },
    total: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true,
      defaultValue: 0.0
    },
    grade: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "F"
    },
    gpoint: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true,
      defaultValue: 0.0
    },
    year: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sem: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    yrgp: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    groups: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lecturer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "lecturer who uploads mark"
    },
    resit: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "no"
    },
    dateRegistered: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updates: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    programme: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Resit',
    timestamps: true
  });
};

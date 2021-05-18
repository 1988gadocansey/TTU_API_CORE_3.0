const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeletedGrade', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
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
      allowNull: false
    },
    student: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    indexno: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    quiz1: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false
    },
    quiz2: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false
    },
    quiz3: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false
    },
    midSem1: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false
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
      allowNull: false,
      defaultValue: "E"
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
      allowNull: true,
      defaultValue: "no"
    },
    dateRegistered: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updates: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeletedGrade',
    timestamps: true,
    indexes: [

    ]
  });
};

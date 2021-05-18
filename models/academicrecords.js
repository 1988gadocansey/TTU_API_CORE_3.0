const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('academicrecords', {
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASS1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACADYEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COURSE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COURSENAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CREDITHRS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MARK: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MARKS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRADE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ONLINE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YRSQUAREDPLUSSEM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TRAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CALC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASS2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RESIT: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'academicrecords',
    timestamps: false
  });
};

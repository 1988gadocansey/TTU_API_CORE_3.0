const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MountedCourse', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    COURSE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COURSE_CODE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    COURSE_CREDIT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COURSE_SEMESTER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COURSE_LEVEL: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    COURSE_TYPE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PROGRAMME: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    LECTURER: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "54"
    },
    COURSE_YEAR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SYNC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1 means online , 0 means offline"
    },
    MOUNTED_BY: {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "HOD who mount the course"
    },
    INPUTEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    CLOSED: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    YEAR_GROUP: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DOWN_CODE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MountedCourse',
    timestamps: false,
    indexes: [

    ]
  });
};

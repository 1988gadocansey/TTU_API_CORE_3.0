const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Course', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    COURSE_CODE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COURSE_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COURSE_CREDIT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROGRAMME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PROGRAMME_OPTION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    COURSE_SEMESTER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COURSE_LEVEL: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    USER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "who created the course"
    },
    UPDATED: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    course_name2: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Course',
    timestamps: false,
    indexes: [

      {
        name: "myindex1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "COURSE_CODE" },
          { name: "COURSE_NAME" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mastercourses', {
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
    CREDITS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COURSECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mastercourses',
    timestamps: false
  });
};

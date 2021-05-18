const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses', {
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OPTIONS: {
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
    KIND: {
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
    COURSECODE: {
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
    }
  }, {
    sequelize,
    tableName: 'courses',
    timestamps: false
  });
};

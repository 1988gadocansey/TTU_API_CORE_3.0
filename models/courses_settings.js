const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses_settings', {
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
    MAXSEMCREDITS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINOP1COURSES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINOP2COURSES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINOP3COURSES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINSEMCREDITS: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'courses_settings',
    timestamps: false
  });
};

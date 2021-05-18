const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students_excluded', {
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REASON: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACADYEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'students_excluded',
    timestamps: false
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gradingsystem_scoring', {
    GRADINGTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LOWERLIMIT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPPERLIMIT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRADE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TRAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REMARK: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gradingsystem_scoring',
    timestamps: false
  });
};

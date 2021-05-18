const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tagstudents', {
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TAG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REASONS: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tagstudents',
    timestamps: false
  });
};

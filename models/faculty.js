const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faculty', {
    FACCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COLLEGECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FACULTY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'faculty',
    timestamps: false
  });
};

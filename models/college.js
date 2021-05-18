const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('college', {
    COLLEGECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COLLEGE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HEAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HEADS_TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'college',
    timestamps: false
  });
};

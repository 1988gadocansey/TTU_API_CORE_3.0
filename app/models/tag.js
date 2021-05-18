const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tag', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GROUPING: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TAG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SGDEF: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PLDEF: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SHOW: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACADHEAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Tag',
    timestamps: false
  });
};

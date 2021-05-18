const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Classes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lowerBoundary: {
      type: DataTypes.DECIMAL(4,3),
      allowNull: true
    },
    upperBoundary: {
      type: DataTypes.DECIMAL(4,3),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Classes',
    timestamps: false,

  });
};

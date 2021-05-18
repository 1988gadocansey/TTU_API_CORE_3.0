const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINE6: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Address',
    timestamps: false
  });
};

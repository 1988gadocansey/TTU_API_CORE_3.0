const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Faculty', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACULTY: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FACCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BANK: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FHND_CODE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SLUG: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Faculty',
    timestamps: false,

  });
};
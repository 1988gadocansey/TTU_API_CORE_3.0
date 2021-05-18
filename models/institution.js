const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('institution', {
    ID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LOGO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    KIND: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USE_LEVELS: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'institution',
    timestamps: false
  });
};

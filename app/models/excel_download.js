const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExcelDownload', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    YEAR: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    SEM: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    LECTURER: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    PROGRAMME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    COURSE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

  }, {
    sequelize,
    tableName: 'ExcelDownload',
    timestamps: false,

  });
};

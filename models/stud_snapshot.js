const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stud_snapshot', {
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACADYEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FEEPAYING: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HALLSOFRESIDENCE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NATIONALITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AMOUNTEX: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RES: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GHA: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stud_snapshot',
    timestamps: false
  });
};

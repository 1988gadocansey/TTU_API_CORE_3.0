const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Clearance', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TRANSDATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REASON: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },


    CLEARED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INSERTEDBY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INSERTEDAT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },

    SEM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACADYEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Clearance',
    timestamps: false
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rustication', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    year: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sem: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    student: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    duration: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "1 means allow. 0 means blocked"
    },
    reason: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Rustication',
    timestamps: false,
    indexes: [

    ]
  });
};

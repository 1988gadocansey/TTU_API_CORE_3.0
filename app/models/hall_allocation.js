const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HallAllocation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hall: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    room: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    allocation: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0"
    },
    student: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'HallAllocation',
    timestamps: false,
    indexes: [

    ]
  });
};

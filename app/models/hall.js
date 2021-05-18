const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hall', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HALL_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    HALL_LOCATION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    HALL_CAPACITY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SPACE_USED: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BANK: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ACCOUNTNUMBER: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    AMOUNT: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Hall',
    timestamps: false,
    indexes: [

    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sms', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(9000),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    dates: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    sender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    receipient: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    term: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Sms',
    timestamps: false,
    indexes: [

    ]
  });
};

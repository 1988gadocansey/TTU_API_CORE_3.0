const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Zone', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REGION: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    ZONE: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    SUBZONES: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Zone',
    timestamps: false,
    indexes: [

    ]
  });
};

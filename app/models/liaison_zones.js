const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LiaisonZones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    region: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    zones: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    sub_zone: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LiaisonZones',
    timestamps: false,
    indexes: [

    ]
  });
};

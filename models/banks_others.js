const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banks_others', {
    BANKS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UNIT: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'banks_others',
    timestamps: false
  });
};

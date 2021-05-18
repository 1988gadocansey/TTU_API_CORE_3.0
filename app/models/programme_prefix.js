const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProgrammePrefix', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    programme: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "2017\/2018"
    },
    year: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProgrammePrefix',
    timestamps: false,
    indexes: [

    ]
  });
};

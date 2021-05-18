const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gradingsystem_classes', {
    GRADINGTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LOWERLIMIT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UPPERLIMIT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AWARD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AWARD_SHORTCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ORDERBYNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gradingsystem_classes',
    timestamps: false
  });
};

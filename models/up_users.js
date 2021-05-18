const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('up_users', {
    USERNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TEMP_PWD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LAST_LOGIN: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'up_users',
    timestamps: false
  });
};

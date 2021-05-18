const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Department', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DEPTCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FACCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEPARTMENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DHND_CODE: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Department',
    timestamps: false,
    indexes: [
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};

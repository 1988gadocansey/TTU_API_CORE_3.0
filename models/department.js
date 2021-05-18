const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'department',
    timestamps: false,
    indexes: [
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

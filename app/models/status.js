const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    year_group: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    student: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "1 means allow. 0 means blocked"
    }
  }, {
    sequelize,
    tableName: 'Status',
    timestamps: false,
    indexes: [

      {
        name: "myindexs",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "year_group" },
          { name: "student" },
        ]
      },
    ]
  });
};

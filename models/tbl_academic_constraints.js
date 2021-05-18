const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_academic_constraints', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    YEAR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEMESTER: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1 means open,0 means closed"
    },
    PASSWORD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "set to 1 or set to 0 if cleared"
    }
  }, {
    sequelize,
    tableName: 'tbl_academic_constraints',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};

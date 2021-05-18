const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admissionletter', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    letter: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admissionletter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "type",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "year" },
        ]
      },
    ]
  });
};

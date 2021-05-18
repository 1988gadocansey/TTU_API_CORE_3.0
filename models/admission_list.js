const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admission_list', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FORM_NO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PROGRAMME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FORM_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admission_list',
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

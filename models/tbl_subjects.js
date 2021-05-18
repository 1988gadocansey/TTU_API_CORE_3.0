const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_subjects', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SHORTCODE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    COURSE_WEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_subjects',
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
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
    ]
  });
};

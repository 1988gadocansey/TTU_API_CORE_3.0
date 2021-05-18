const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_work_experience', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_FORM: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    WORK_PLACE: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    POSITION_HELD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PERIOD_FROM: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PERIOD_TO: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_work_experience',
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
        name: "APP_FORM",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APP_FORM" },
          { name: "WORK_PLACE" },
          { name: "PERIOD_FROM" },
          { name: "PERIOD_TO" },
        ]
      },
    ]
  });
};

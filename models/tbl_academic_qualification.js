const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_academic_qualification', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_FORM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    QUALIFICATION_OBTAINED: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADES: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    INPUTEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'tbl_academic_qualification',
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

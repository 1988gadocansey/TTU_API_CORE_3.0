const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_form_types', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APPLICANT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "refers to the PIN of the student",
      unique: "APPLICANT"
    },
    TYPE: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "refers to the form the student choose to apply with"
    }
  }, {
    sequelize,
    tableName: 'tbl_form_types',
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
        name: "APPLICANT",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APPLICANT" },
        ]
      },
    ]
  });
};

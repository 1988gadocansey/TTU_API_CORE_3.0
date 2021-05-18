const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_mature_qualifications', {
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
    SUBJECT1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SUBJECT8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GRADE8: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_mature_qualifications',
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

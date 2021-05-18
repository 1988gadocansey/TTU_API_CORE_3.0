const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programs', {
    pid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcode: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    certificate: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    min_credit: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    affiliation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    school: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    semesters: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    majors: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    mother: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    running: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 means admission is closed, 1 means is open"
    }
  }, {
    sequelize,
    tableName: 'programs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};

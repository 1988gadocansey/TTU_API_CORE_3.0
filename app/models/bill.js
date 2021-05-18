const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bill', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PROGRAMME: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LEVEL: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    YEAR: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "2017\/2018"
    },
    SERVICES: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EXAMINATION: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AFUF: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRACTICALS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    COMPENSATION: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SRC: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ATTACHMENT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AMOUNT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Bill',
    timestamps: false,
    indexes: [

      {
        name: "PROGRAMME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PROGRAMME" },
          { name: "LEVEL" },
          { name: "YEAR" },
          { name: "AMOUNT" },
        ]
      },
    ]
  });
};

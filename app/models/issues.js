const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Issue', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    issue_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stdName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    stdIndex: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    stdPhone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    std_program: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    dateSubmited: {
      type: DataTypes.DATE,
      allowNull: false,

    },
    std_status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "0"
    },
    author: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    stdMail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    stdType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    stdIssue: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Issue',
    timestamps: false,
    indexes: [

    ]
  });
};

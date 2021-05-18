const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Calender', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    YEAR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEMESTER: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "1"
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1 means open,0 means closed"
    },
    PASSWORD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "set to 1 or set to 0 if cleared"
    },
    ENTER_RESULT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    LIAISON: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QA: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    RESULT_BLOCK: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    QAOPEN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RESULT_DATE: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    RESULT_DATE_DOWN: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    GRAD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ADMIT: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ASSIGN_INDEX: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    REG100H: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG200H: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG300H: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG100NT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG200NT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG500MT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG600MT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG100BTT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG200BTT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG100BT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG200BT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG300BT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG400BT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LATE_REG: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LATE_AMT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SYNC_DATE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    RESIT: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    RESIT_REG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    RESIT_UPLOAD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Calender',
    timestamps: false,
    indexes: [

    ]
  });
};

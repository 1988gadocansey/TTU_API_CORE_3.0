const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LiaisonAssumptionDuty', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    INDEX_NO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "INDEX_NO"
    },
    LEVEL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SESSION_TYPE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PROGRAMME: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CONTACT_ADDRESS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DATE_OF_DUTY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COMPANY_NAME: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COMPANY_ADDRESS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COMPANY_PHONE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COMPANY_EMAIL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COMPANY_LOCATION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COMPANY_EXACT_LOCATION: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    COMPANY_SUPERVISOR: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COMPANY_SUPERVISOR_NO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    COMPANY_SUBZONE: {
      type: DataTypes.STRING(240),
      allowNull: false
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    INPUTEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'LiaisonAssumptionDuty',
    timestamps: false,
    indexes: [

      {
        name: "INDEX_NO",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "INDEX_NO" },
        ]
      },
    ]
  });
};

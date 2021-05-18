const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programme', {
    COLLEGECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FACCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEPTCODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMENO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMME2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRADINGTYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEGREE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UG_PG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DURATION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MINCREDITS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PICTURESFOLDER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SIGNSREGISTRATIONSLIP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPT_LINE1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPT_LINE2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPT_LINE3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPT_LINE4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYRESULTS_LINE1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYRESULTS_LINE2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYRESULTS_LINE3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYRESULTS_LINE4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GOVERNINGBOARD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OURREFPREFIX_TRANSCRIPT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPTCOVER_LINE1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPTCOVER_LINE2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPTCOVER_LINE3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CERTIFYTRANSCRIPTCOVER_LINE4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APPENDOPTIONTOAWARD: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'programme',
    timestamps: false
  });
};

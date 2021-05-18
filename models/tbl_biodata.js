const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_biodata', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_FORM: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "APP_FORM"
    },
    TITLE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SURNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FIRSTNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OTHERNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GENDER: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    AGE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RELIGION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    DISTRICT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOMETOWN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DOB: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GURDIAN_NAME: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    GURDIAN_ADDRESS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    GURDIAN_OCCUPATION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    RELATIONSHIP_TO_APPLICATION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    GURDIAN_PHONE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    GURDIAN_MAIL: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PHONE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REGION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NATIONALITY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FIRST_CHOICE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SECOND_CHOICE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ENTRY_QUALIFICATION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SESSION_PREFERENCE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    YEAR_ADMISION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PLACE_OF_WORK: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    YEARS_EXPERIENCE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    KIN_CONTACT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    OLD_UNIVERSITY: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PROGRAMME_STUDY: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SOURCE_OF_FINANCE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DISABLE_REPONSE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PHYSICALLY_DISABLED: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ENTRY_TYPE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ADDRESS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    MARITAL_STATUS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    NO_OF_CHILD: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EXAM_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    GRADE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PHOTO_UPLOADED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    RESIDENTIAL: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    INDEXNO: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    STREET: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    POSTAL_ADDRESS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PERMANET_STREET: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PERMANET_ADDRESS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ACCOUNT_STATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 means pending while 1 means aproved"
    },
    FORM_TYPE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    WORKING_EXPERIENCE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    UPDATED: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "updated to 1 if theres data updated else set to 0"
    },
    FEE_PAYING: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    residentialRegion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    residentialDistrict: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    residentialTown: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    residentialHouseNo: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    postalRegion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    postalDistrict: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    postalTown: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    postalBox: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    interPoint: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(9000),
      allowNull: false
    },
    admit: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    fee: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reported: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    admitedby: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    qualified: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    tempAdmit: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    totalPoint: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    programoffered: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    admissionNo: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    feeding: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    accommodation: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    show_on_portal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "yes",
      comment: "yes means show, no means dont show"
    },
    INPUTEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'tbl_biodata',
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
        ]
      },
    ]
  });
};

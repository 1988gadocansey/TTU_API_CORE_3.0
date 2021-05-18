const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Student', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    INDEXNO: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LEVEL: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    YEAR: {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "when we refers to levels as year"
    },
    STNO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SURNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FIRSTNAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OTHERNAMES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SEX: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DATEOFBIRTH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AGE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_ADMITTED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TITLE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GRADUATING_GROUP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MARITAL_STATUS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    HALL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RESIDENTIAL_ADDRESS: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "resident address"
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TELEPHONENO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COUNTRY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REGION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RELIGION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    HOMETOWN: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    GUARDIAN_NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    GUARDIAN_ADDRESS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    GUARDIAN_PHONE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    GUARDIAN_OCCUPATION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DISABILITY: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Completed,Dead,Deffered..."
    },
    NHIS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    STUDENT_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "resident ,non resident"
    },
    HOSTEL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CGPA: {
      type: DataTypes.DECIMAL(4,3),
      allowNull: false,
      defaultValue: 0.000
    },
    CLASS: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "eg 1st class"
    },
    CWA: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false,
      defaultValue: 0.0,
      comment: "average weighted score"
    },
    NAB_CLASS: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0"
    },
    FLAGS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TOTAL_CREDIT_DONE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CREDIT_LEFT_COMPLETE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ALLOW_REGISTER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "allow to register on portal"
    },
    ALLOW_RESULT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "allow to see result on portal"
    },
    REGISTERED: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QUALITY_ASSURANCE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 means assesed, 0 means pending"
    },
    LIAISON: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 means assesed, 0 means pending"
    },
    ASSUMPTION_DUTY: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Represent students who have assumed duty"
    },
    HAS_PASSWORD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1 means has password,0 means no"
    },
    SYSUPDATE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "biodata updates"
    },
    BALANCE: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    BILLS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    PAID: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    BILL_OWING: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    SMS_SENT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    INPUTEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    PROTOCOL: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vw: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalAssed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TRAIL: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "no"
    },
    SUP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    COMBINEDCODE: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "used to show evening and regular as one program"
    },
    pin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    serial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NAB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    FOREIGNER: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0"
    },
    ROOM: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0"
    },
    LEVEL_ADMITTED: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    MATRICULATION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "NO"
    }
  }, {
    sequelize,
    tableName: 'Student',
    timestamps: false,
    indexes: [

    ]
  });
};

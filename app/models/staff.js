const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Staff', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    staffID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    othernames: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    disabilty: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kinName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ssnit: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    placeofresidence: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    region: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    religion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dob: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    marital: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    kinAddress: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    kinPhone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    education: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    hometown: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dependentsNo: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    salary: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    dateHired: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    leaves: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    empStatus: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    teaches: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    inputeddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Staff',
    timestamps: false,
    indexes: [

    ]
  });
};

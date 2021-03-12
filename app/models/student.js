'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    title: DataTypes.STRING,
    admission_no: DataTypes.INTEGER,
    index_no: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    phone: DataTypes.STRING,
    alt_phone: DataTypes.STRING,
    room: DataTypes.STRING,
    hometown: DataTypes.STRING,
    emergency_contact: DataTypes.STRING,
    email: DataTypes.STRING,
    residential_status: DataTypes.BOOLEAN,
    guardian_name: DataTypes.STRING,
    guardian_relation: DataTypes.STRING,
    guardian_occupation: DataTypes.STRING,
    guardian_phone: DataTypes.STRING,
    disability: DataTypes.BOOLEAN,
    disability_type: DataTypes.STRING,
    hostel: DataTypes.STRING,
    postgprs: DataTypes.STRING,
    date_admitted: DataTypes.DATE,
    level_admitted: DataTypes.STRING,
    credit_done: DataTypes.INTEGER,
    credit_left: DataTypes.INTEGER,
    year_admitted: DataTypes.STRING,
    graduation_year: DataTypes.STRING,
    liaison: DataTypes.BOOLEAN,
    ltr_assessment: DataTypes.BOOLEAN,
    registered: DataTypes.BOOLEAN,
    bill:DataTypes.DECIMAL(10,2),
    paid:DataTypes.DECIMAL(10,2),
    owing:DataTypes.DECIMAL(10,2),
    trail:DataTypes.BOOLEAN,
    suplementary:DataTypes.BOOLEAN,
    combined_code:DataTypes.STRING,
    matriculated:DataTypes.BOOLEAN,
    nab:DataTypes.STRING,
    protocol:DataTypes.BOOLEAN,
    scholarship:DataTypes.BOOLEAN,
    admissions_data:DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'Student',
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Programme, {
      foreignKey: 'programme_id',
      onDelete: 'CASCADE',
    });
  };

 /* Student.associate = (models) => {
    Student.belongsTo(models.Level, {
      foreignKey: 'level_id',
      onDelete: 'CASCADE',
    });
  };*/



  return Student;
};
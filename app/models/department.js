'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Department.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    dhnd_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });

  Department.associate = (models) => {
    Department.hasMany(models.Programme, {
      foreignKey: 'department_id',
      as: 'programme',
    });
  };

  Department.associate = (models) => {
    Department.belongsTo(models.Faculty, {
      foreignKey: 'faculty_id',
      onDelete: 'CASCADE',
    });
  };


  return Department;
};
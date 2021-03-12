'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GradingSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GradingSystem.init({
    grade: DataTypes.STRING,
    lower: DataTypes.DECIMAL,
    upper: DataTypes.DECIMAL,
    value: DataTypes.DECIMAL,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GradingSystem',
  });

  GradingSystem.associate = (models) => {
    GradingSystem.hasMany(models.Programme, {
      foreignKey: 'grading_system_id',
      as: 'programme',
    });
  };



  return GradingSystem;
};
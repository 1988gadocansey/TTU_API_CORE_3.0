'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Faculty.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Faculty',
  });

  Faculty.associate = (models) => {
    Faculty.hasMany(models.Department, {
      foreignKey: 'faculty_id',
      as: 'department',
    });
  };

  Faculty.associate = (models) => {
    Faculty.belongsTo(models.College, {
      foreignKey: 'college_id',
      onDelete: 'CASCADE',
    });
  };





  return Faculty;
};
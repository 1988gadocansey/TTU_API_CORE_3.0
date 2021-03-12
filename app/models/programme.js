'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  Programme.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    code: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    min_credits: DataTypes.INTEGER,
    max_credits: DataTypes.INTEGER,
    type:DataTypes.STRING,
    result:DataTypes.STRING,
    hnd_code:DataTypes.STRING,
    combined_code:DataTypes.STRING,
    combined_department:DataTypes.STRING,
    session:DataTypes.STRING,
    show_on_portal:DataTypes.BOOLEAN,
    running:DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Programme',
  });

  Programme.associate = (models) => {
    Programme.hasMany(models.Student, {
      foreignKey: 'programme_id',
      as: 'student',
    });
  };

  Programme.associate = (models) => {
    Programme.belongsTo(models.Department, {
      foreignKey: 'department_id',
      onDelete: 'CASCADE',
    });
  };

  Programme.associate = (models) => {
    Programme.belongsTo(models.GradingSystem, {
      foreignKey: 'grading_system_id',
      onDelete: 'CASCADE',
    });
  };



  return Programme;
};
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GradingSystem', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    lower: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false
    },
    upper: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "eg HND"
    }
  }, {
    sequelize,
    tableName: 'GradingSystem',
    timestamps: false,
    indexes: [

      {
        name: "grade",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "grade" },
          { name: "lower" },
          { name: "upper" },
          { name: "value" },
          { name: "type" },
        ]
      },
    ]
  });
};

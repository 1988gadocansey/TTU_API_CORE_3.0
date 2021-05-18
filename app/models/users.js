const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(88),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(88),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Accountant"
    },
    position: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isSupperAdmin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "Finance"
    },
    staffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "references worker table"
    },
    fund: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "represent fund data"
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    student_groups: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    biodata_update: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [

    ]
  });
};

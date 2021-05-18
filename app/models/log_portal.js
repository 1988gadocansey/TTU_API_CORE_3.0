const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PortalAuth', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    student: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    stno: {
      type: DataTypes.STRING(119),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    real_password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    level: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    programme: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    access_level: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "Student"
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_sign_in: {
      type: DataTypes.DATE,
      allowNull: false,

    },
    biodata_update: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'PortalAuth',
    timestamps: false,
    indexes: [

    ]
  });
};

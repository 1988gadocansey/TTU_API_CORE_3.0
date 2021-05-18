const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LiaisonData', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    indexno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    level: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    date_duty: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_address_to: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_supervisor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    company_subzone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    terms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LiaisonData',
    timestamps: false,
    indexes: [

    ]
  });
};

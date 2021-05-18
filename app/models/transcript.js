const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Transcript', {
    statusdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    indexno: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(20000),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    college: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    program: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    class: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    yoa: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    yoc: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    trackingno: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    paidby: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    contactAddress: {
      type: DataTypes.STRING(900),
      allowNull: false
    },
    document: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    delivery: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    copies: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_at: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Transcript',
    timestamps: false,
    indexes: [

    ]
  });
};

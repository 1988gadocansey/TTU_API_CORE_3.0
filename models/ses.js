const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ses', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    session_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    session_ip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    session_last_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    last_page: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pro: {
      type: DataTypes.STRING(20000),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feesettings', {
    ACADYEAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COLLEGECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NFPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NFPR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NFPRREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GFPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FFPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FFPR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FFPRREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EXRATEDOLLAR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EXRATEPOUND: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EXRATEEURO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_NFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_NFPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_NFPR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_NFPRREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_GFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_GFPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_FFP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_FFPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_FFPR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_FFPRREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GFPR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    O_GFPR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMMECODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feesettings',
    timestamps: false
  });
};

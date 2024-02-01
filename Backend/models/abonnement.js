const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abonnement', {
    IdAbonnement: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    NomAbonnement: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Prix: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    Duree: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    Idtype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'typeabonnement',
        key: 'Idtype'
      }
    }
  }, {
    sequelize,
    tableName: 'abonnement',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdAbonnement" },
        ]
      },
      {
        name: "Idtype",
        using: "BTREE",
        fields: [
          { name: "Idtype" },
        ]
      },
    ]
  });
};

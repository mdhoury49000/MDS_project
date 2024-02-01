const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abonne', {
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilisateur',
        key: 'IdUser'
      }
    },
    IdAbonnement: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'abonnement',
        key: 'IdAbonnement'
      }
    },
    DateDebut: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateFin: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'abonne',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdUser" },
          { name: "IdAbonnement" },
        ]
      },
      {
        name: "IdAbonnement",
        using: "BTREE",
        fields: [
          { name: "IdAbonnement" },
        ]
      },
    ]
  });
};

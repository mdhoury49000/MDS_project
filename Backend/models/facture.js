const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facture', {
    IdFacture: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DateFacture: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdAbonnement: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'abonnement',
        key: 'IdAbonnement'
      }
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'IdUser'
      }
    }
  }, {
    sequelize,
    tableName: 'facture',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdFacture" },
        ]
      },
      {
        name: "IdAbonnement",
        using: "BTREE",
        fields: [
          { name: "IdAbonnement" },
        ]
      },
      {
        name: "IdUser",
        using: "BTREE",
        fields: [
          { name: "IdUser" },
        ]
      },
    ]
  });
};

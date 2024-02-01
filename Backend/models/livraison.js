const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livraison', {
    IdLivraison: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DateLivraison: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estLivre: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    NomDestinataire: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PrenomDestinataire: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdresseLivraison: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ville',
        key: 'IdVille'
      }
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'IdUser'
      }
    },
    IdCommande: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'commande',
        key: 'IdCommande'
      }
    }
  }, {
    sequelize,
    tableName: 'livraison',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdLivraison" },
        ]
      },
      {
        name: "IdVille",
        using: "BTREE",
        fields: [
          { name: "IdVille" },
        ]
      },
      {
        name: "IdUser",
        using: "BTREE",
        fields: [
          { name: "IdUser" },
        ]
      },
      {
        name: "IdCommande",
        using: "BTREE",
        fields: [
          { name: "IdCommande" },
        ]
      },
    ]
  });
};

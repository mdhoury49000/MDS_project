const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articles', {
    IdArticle: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Prix: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    estARetirer: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IdCommande: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'commande',
        key: 'IdCommande'
      }
    },
    IdTypeVehicule: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'typevehicule',
        key: 'IdTypeVehicule'
      }
    },
    IdMarque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marque',
        key: 'IdMarque'
      }
    },
    IdPiece: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pieces',
        key: 'IdPiece'
      }
    },
    IdEtat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'etat',
        key: 'IdEtat'
      }
    }
  }, {
    sequelize,
    tableName: 'articles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdArticle" },
        ]
      },
      {
        name: "IdCommande",
        using: "BTREE",
        fields: [
          { name: "IdCommande" },
        ]
      },
      {
        name: "IdTypeVehicule",
        using: "BTREE",
        fields: [
          { name: "IdTypeVehicule" },
        ]
      },
      {
        name: "IdMarque",
        using: "BTREE",
        fields: [
          { name: "IdMarque" },
        ]
      },
      {
        name: "IdPiece",
        using: "BTREE",
        fields: [
          { name: "IdPiece" },
        ]
      },
      {
        name: "IdEtat",
        using: "BTREE",
        fields: [
          { name: "IdEtat" },
        ]
      },
    ]
  });
};

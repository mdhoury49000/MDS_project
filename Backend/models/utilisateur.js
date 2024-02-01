const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('utilisateur', {
    IdUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Prenom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Adresse: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Dnaiss: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Tel: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    Mail: {
      type: DataTypes.STRING(125),
      allowNull: false,
      unique: "Mail"
    },
    MotDePasse: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estVendeur: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    estArtiste: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    IdGenre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'genre',
        key: 'IdGenre'
      }
    },
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ville',
        key: 'IdVille'
      }
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdUser" },
        ]
      },
      {
        name: "Mail",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Mail" },
        ]
      },
      {
        name: "IdGenre",
        using: "BTREE",
        fields: [
          { name: "IdGenre" },
        ]
      },
      {
        name: "IdVille",
        using: "BTREE",
        fields: [
          { name: "IdVille" },
        ]
      },
    ]
  });
};

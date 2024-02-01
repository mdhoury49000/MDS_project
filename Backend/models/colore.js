const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('colore', {
    IdArticle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'articles',
        key: 'IdArticle'
      }
    },
    IdCouleur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'couleur',
        key: 'IdCouleur'
      }
    }
  }, {
    sequelize,
    tableName: 'colore',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdArticle" },
          { name: "IdCouleur" },
        ]
      },
      {
        name: "IdCouleur",
        using: "BTREE",
        fields: [
          { name: "IdCouleur" },
        ]
      },
    ]
  });
};

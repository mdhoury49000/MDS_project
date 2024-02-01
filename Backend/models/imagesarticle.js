const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imagesarticle', {
    IdImage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IdArticle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'IdArticle'
      }
    }
  }, {
    sequelize,
    tableName: 'imagesarticle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdImage" },
        ]
      },
      {
        name: "IdArticle",
        using: "BTREE",
        fields: [
          { name: "IdArticle" },
        ]
      },
    ]
  });
};

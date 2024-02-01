const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imagespostes', {
    IdImage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ImagePoste: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IdPoste: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        key: 'IdPoste'
      }
    }
  }, {
    sequelize,
    tableName: 'imagespostes',
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
        name: "IdPoste",
        using: "BTREE",
        fields: [
          { name: "IdPoste" },
        ]
      },
    ]
  });
};

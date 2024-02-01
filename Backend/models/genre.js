const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genre', {
    IdGenre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    NomGenre: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'genre',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdGenre" },
        ]
      },
    ]
  });
};

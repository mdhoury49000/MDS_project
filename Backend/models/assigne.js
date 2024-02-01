const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assigne', {
    IdVille: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ville',
        key: 'IdVille'
      }
    },
    IdCodePostal: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'codepostal',
        key: 'IdCodePostal'
      }
    }
  }, {
    sequelize,
    tableName: 'assigne',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdVille" },
          { name: "IdCodePostal" },
        ]
      },
      {
        name: "IdCodePostal",
        using: "BTREE",
        fields: [
          { name: "IdCodePostal" },
        ]
      },
    ]
  });
};

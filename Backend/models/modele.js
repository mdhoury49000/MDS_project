const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modele', {
    IdModele: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NomModele: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AnneeModele: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    IdMarque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marque',
        key: 'IdMarque'
      }
    }
  }, {
    sequelize,
    tableName: 'modele',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdModele" },
        ]
      },
      {
        name: "IdMarque",
        using: "BTREE",
        fields: [
          { name: "IdMarque" },
        ]
      },
    ]
  });
};

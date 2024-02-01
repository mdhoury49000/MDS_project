const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commande', {
    IdCommande: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DateCommande: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Poids: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'IdUser'
      }
    },
    IdUser_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'IdUser'
      }
    }
  }, {
    sequelize,
    tableName: 'commande',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdCommande" },
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
        name: "IdUser_1",
        using: "BTREE",
        fields: [
          { name: "IdUser_1" },
        ]
      },
    ]
  });
};

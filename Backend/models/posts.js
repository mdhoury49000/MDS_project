const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posts', {
    IdPoste: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Titre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    Dpublication: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'IdUser'
      }
    }
  }, {
    sequelize,
    tableName: 'posts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdPoste" },
        ]
      },
      {
        name: "IdUser",
        using: "BTREE",
        fields: [
          { name: "IdUser" },
        ]
      },
    ]
  });
};

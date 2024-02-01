const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codepostal', {
    IdCodePostal: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Cp: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'codepostal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdCodePostal" },
        ]
      },
    ]
  });
};

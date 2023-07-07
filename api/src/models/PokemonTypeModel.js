const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true, // me devuelve un id unico
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // no se permite que el campo este en estado null
      unique: true, // el valor de la propiedad name, no se puede repetir
    },
  }, {
    timestamps: false,
  });
};

const db = require("../db/connection");
const { DataTypes } = require("sequelize");
const People = require("./people");

//Creamos el modelo de la tabla
const Dogs = db.define(
  "dogs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    raza: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    años: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_person: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    updatedAt: false,
  }
);

People.hasMany(Dogs, {
  as: "dogsPerson",
  foreignKey: "id_person",
});

Dogs.belongsTo(People, {
  foreignKey: "id_person",
  as: "persondog",
  onDelete: "CASCADE",
});

module.exports = Dogs;

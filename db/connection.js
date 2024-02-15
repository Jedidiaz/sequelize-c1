const { Sequelize } = require("sequelize");

//definimos la conexion de base de datos
const db = new Sequelize("test", "test", "test123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;

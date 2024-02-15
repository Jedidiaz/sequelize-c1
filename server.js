const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/connection");
const Dogs = require("./models/dogs");
const People = require("./models/people");

const app = express();
app.use(bodyParser.json());

//autenticamos o sincronizamos nuestra base de datos
db.sync()
  .then(() => console.log("Conexion con base de datos"))
  .catch((error) => console.log("Error: " + error));

//Crear nuestro primer perro
// People.create({ nombre: "Jedidiaz", apellido: "Fagundez", edad: 23 });
// Dogs.create({ nombre: "Firulais", raza: "Pitbull", años: 2, id_person: 1 });
//Extraemos todos nuestros perros
People.findOne({
  where: { id: 1 },
  include: [{ model: Dogs, as: "dogsPerson" }],
}).then(function (data) {
  console.log(data?.toJSON());
});
// Dogs.findOne({
//   where: { id: 1 },
//   include: [{ model: People, as: "persondog" }],
// }).then(function (data) {
//   console.log(data.toJSON());
// });
// Dogs.findAll().then((dogs) => {
//     dogs.forEach((dog) => console.log(dog.toJSON()));
// });
// Dogs.findOne({ where: { id: 1 } }).then((dog) => console.log(dog.toJSON()));
//Acualizámos los perros
// Dogs.update({ raza: "Chanda" }, { where: { raza: "Pitbull" } });
//Eliminar perros
// People.destroy({ where: { id: 1 } });

app.listen(3000, () => {
  console.log("Aplicación corriendo puerto 3000");
});

'use strict'

/* Aquí se creará el servidor y se hará la conexión a la base de datos
 * También se importarán todos los módulos y archivos necesarios
 */

var mongoose = require('mongoose'); //import el módulo de mongo, obtengo un objeto en la variable 'mongoose'
var app = require('./app');
var port = 3700;

mongoose.connect("mongodb://jmamani.documents.azure.com:10255/clima"+"?ssl=true&replicaSet=globaldb", {
  auth: {
    user: "jmamani",
    password: "qKW8pnfEW1p0pAio6yElp1ktvp7pYibVtqp87S9oj1HLOALfXEZlc6PboMxCrFqY50NiLORxYyERrLPEtGhFdw=="
  }
})
	.then(() => {
		console.log('Conexión a la base de datos establecida...');

		// creación del servidor
		app.listen(port, () => {
			console.log("Servidor corriendo en la URL: localhost:3700");
		});
	})
	.catch((err) => console.error(err));



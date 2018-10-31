'use strict'

/* Un modelo representa un documento de la 'colección' en la base de 
 * datos
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicacionSchema = Schema({
	texto: String,
	ubicacion: String,
	fecha: Date,
	imagen: String,
	publicador: String
});

module.exports = mongoose.model('Publicaciones', PublicacionSchema); //mongoose convierte 'Publicaciones' a 'publicaciones'
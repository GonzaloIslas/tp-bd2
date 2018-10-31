'use strict'

/* Un modelo representa un documento de la 'colección' en la base de 
 * datos
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
	nombre: String,
	apellido: String,
	nick: String,
	edad: Number,
	conseña: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema); //mongoose convierte 'Usuario' a 'usuarios'

'use strict'

/* Un modelo representa un documento de la 'colección' en la base de 
 * datos
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComentarioSchema = Schema({
	valor: String,
	fechaYHora: String,
	usuarioId: String,
	publicacionId: String,
});

module.exports = mongoose.model('Comentario', ComentarioSchema); //mongoose convierte 'Usuario' a 'usuarios'

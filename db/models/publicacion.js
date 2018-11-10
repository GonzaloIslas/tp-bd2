var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicacionSchema = Schema({
	texto: String,
	ubicacion: String,
	fecha: Date,
	publicador: String,
	comentarios: [{
		comentario: String,
		nick_usuario: String,
	}]
});

var Publicacion = mongoose.model('Publicaciones', PublicacionSchema);

module.exports =  Publicacion;
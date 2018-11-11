var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicacionSchema = Schema({
	localidad: String,
	temperatura: String,
	probDePrecipitacion: Date,
	humedad: String,
	viento: String,
	descripcion: String,
	comentarios: [{
		comentario: String,
		nick_usuario: String,
	}]
},{collection: 'Publicacion'});

var Publicacion = mongoose.model('Publicaciones', PublicacionSchema);

module.exports =  Publicacion;
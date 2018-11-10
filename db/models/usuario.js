
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
	nombre: String,
	apellido: String,
	nick: String,
	contraseña: String
},{collection: 'Usuarios'});

var User = mongoose.model('Usuario', UsuarioSchema);

module.exports =  User;

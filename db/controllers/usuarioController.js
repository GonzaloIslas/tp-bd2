'use strict'

/* Controlador para 'usuario', acciones que pueden realizarse
 * entorno a la entidad 'usuario'
 */

 var Usuario = require('../models/usuario');

 var controller = {

 	home: function(req, res){
 		return res.status(200).send({
 			message: "Soy la home"
 		});
 	},

 	test: function(req, res){
 		return res.status(200).send({
 			message: "Soy el método test del controlador usuario"
 		});
 	},

 	saveUsuario: function(req, res){
 		var usuario = new Usuario(); // creo un objeto 'usuario'

 		var params = req.body;
 		usuario.nombre = params.nombre;
 		usuario.apellido = params.apellido;
 		usuario.nick = params.nick;
 		usuario.edad = params.edad;

 		//Guardo en la base de datos

 		usuario.save((err, usuarioStored) => {
 			if(err) return res.status(500).send({message: 'Error al guardar'});

 			if(!usuarioStored) return res.status(404).send({message: 'No se ha podido guardar el usuario'});
 		
 			return res.status(200).send({usuario: usuarioStored});
 		});
 	},

 	getUsuario: function(req, res){
 		var usuarioId = req.params.id;

 		Usuario.findById(usuarioId, (err, usuario) => {
 			if(err) return res.status(500).send({message: 'Error al devolver los datos'});

 			if(!usuario) return res.status(404).send({message: 'El usuario no existe'});

 			return res.status(200).send({
 				usuario
 			});
 		});
 	},

 	getUsuarios: function(req, res){
 		Usuario.find().exec((err, usuarios) => {
 			if(err) return res.status(500).send({message: 'Erro al devolver los datos'});
 			
 			if(!usuarios) return res.status(404).send({message: 'No hay usuarios para mostrar'});

 			return res.status(200).send({usuarios});
 		});
 	},

 	updateUsuario: function(req, res){
 		var usuarioId = req.params.id;
 		var update = req.body;

 		Usuario.findByIdAndUpdate(usuarioId, update, {new:true}, (err, usuarioUpdated) => {
 			if(err) return res.status(500).send({message: 'Error al actualizar'});

 			if(!usuarioUpdated) return res.status(404).send({message: 'No existe el usuario'});
 		
 			return res.status(200).send({
 				usuario: usuarioUpdated
 			});
 		});
 	},

 	deleteUsuario: function(req, res){
 		var usuarioId = req.params.id;

 		Usuario.findByIdAndRemove(usuarioId, (err, usuarioRemoved) => {
 			if(err) return res.status(500).send({message: 'No se ha podido eliminar al usuario'});

 			if(!usuarioRemoved) return res.status(404).send({message: 'No se puede eliminar este usuario'});

 			return res.status(200).send({
 				usuario: usuarioRemoved
 			});
 		});
 	}
 };

 module.exports = controller;
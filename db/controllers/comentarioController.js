'use strict'

/* Controlador para 'publicacion', acciones que pueden realizarse
 * entorno a la entidad 'publicacion'
 */

var fs = require('fs');
var path = require('path');
var Comentario = require('../models/Comentario');

  var controller = {

 	saveComentario: function(req, res){
 		var comentario = new Comentario(); // creo un objeto 'comentario'

 		var params = req.body;
 		comentario.valor = params.valor;
 		comentario.fechaYHora = params.fechaYHora;
 		comentario.usuarioId = params.usuarioId;
 		comentario.publicacionId = params.publicacionId;

 		//Guardo en la base de datos

 		comentario.save((err, comentarioStored) => {
 			if(err) return res.status(500).send({message: 'Error al guardar'});

 			if(!comentarioStored) return res.status(404).send({message: 'No se ha podido guardar la comentario'});
 		
 			return res.status(200).send({comentario: comentarioStored});
 		});
 	},

 	getComentario: function(req, res){
 		var publicacionId = req.params.id;

 		Comentario.findById(publicacionId, (err, comentario) => {
 			if(err) return res.status(500).send({message: 'Error al devolver los datos'});

 			if(!comentario) return res.status(404).send({message: 'La publicacion no tiene comentarios'});

 			return res.status(200).send({
 				comentario
 			});
 		});
 	},

 	getPublicaciones: function(req, res){
 		Publicacion.find().exec((err, publicaciones) => {
 			if(err) return res.status(500).send({message: 'Erro al devolver los datos'});
 			
 			if(!publicaciones) return res.status(404).send({message: 'No hay publicaciones para mostrar'});

 			return res.status(200).send({publicaciones});
 		});
 	},

 	deleteComentario: function(req, res){
 		var comentarioId = req.params.id;

 		Comentario.findByIdAndRemove(publicacionId, (err, comentarioRemoved) => {
 			if(err) return res.status(500).send({message: 'No se ha podido eliminar la publicación'});

 			if(!comentarioRemoved) return res.status(404).send({message: 'No se puede eliminar este comentraio'});

 			return res.status(200).send({
 				comentario: comentarioRemoved
 			});
 		});
 	}
 };

 module.exports = controller;

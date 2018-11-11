'use strict'

/* Controlador para 'publicacion', acciones que pueden realizarse
 * entorno a la entidad 'publicacion'
 */

 var Publicacion = require('../models/publicacion');

 var controller = {

	savePublicacion: function(req, res){
		var publicacion = new Publicacion(); // creo un objeto 'publicacion'

		var params = req.body;
		publicacion.localidad = params.localidad;
		publicacion.temperatura = params.temperatura;
		publicacion.probDePrecipitacion = params.probDePrecipitacion;
		publicacion.humedad = params.humedad;
		publicacion.viento = params.viento;
		publicacion.descripcion = params.descripcion;

		//Guardo en la base de datos

		publicacion.save((err, publicacionStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar'});

			if(!publicacionStored) return res.status(404).send({message: 'No se ha podido guardar la publicación'});
		
			return res.status(200).send({publicacion: publicacionStored});
		});
	},

	getPublicacion: function(req, res){
		var publicacionId = req.params.id;

		Publicacion.findById(publicacionId, (err, publicacion) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos'});

			if(!publicacion) return res.status(404).send({message: 'La publicacion no existe'});

			return res.status(200).send({
				publicacion
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

	deletePublicacion: function(req, res){
		var publicacionId = req.params.id;

		Publicacion.findByIdAndRemove(publicacionId, (err, publicacionRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido eliminar la publicación'});

			if(!publicacionRemoved) return res.status(404).send({message: 'No se puede eliminar esta publicacion'});

			return res.status(200).send({
				publicacion: publicacionRemoved
			});
		});
	}
};

module.exports = controller;

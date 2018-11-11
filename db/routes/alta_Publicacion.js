var express = require('express');
var PublicacionController = require('../controllers/publicacion');
var router = express.Router();

/*
router.post('/save-publicacion', PublicacionController.savePublicacion);
router.get('/publicacion/:id', PublicacionController.getPublicacion);
router.delete('/publicacion/:id', PublicacionController.deletePublicacion);
router.get('/publicaciones', PublicacionController.getPublicaciones);
*/

//Crear una publicacion
router.post('/crearPublicacion', function(req, res, next){
	var newPublicacion = new PublicacionController();
	newPublicacion.localidad = req.body.localidad;
	newPublicacion.temperatura = req.body.temperatura;
	newPublicacion.probDePrecipitacion = req.body.probDePrecipitacion;
    newPublicacion.humedad = req.body.humedad;
    newPublicacion.viento = req.body.viento;
    newPublicacion.descripcion = req.body.descripcion;

	//request a mongo
	newPublicacion.save(function(err, savedPublicacion){
		if(err){
			console.log(err);
			return res.status(500).send();
		}

		return res.status(200).send();
	});
	res.redirect('/login');

});

module.exports = router;
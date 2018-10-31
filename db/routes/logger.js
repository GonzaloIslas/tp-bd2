var express = require('express');
var router = express.Router();
var http = require ('http');
var usuario = require('../models/usuario');
var controller = require('../controllers/usuarioController');
var mongoose = require('mongoose');


/* GET home page. */
router.get('/login', function (req,res){
	res.render('logger');
/*  Usuario.nick = res.body.user_name;
Usuario.contraseña = res.body.password;*/
});

router.post('/login', function Submit(req,res){
	usuario.nick = req.body.user_name;
	usuario.contraseña = req.body.password;
	return null;
});



/*router.get('/', function (req,res){
	res.render(); //aca va el .html del logger
	res.render('logger', {
		title: 'the ringer'
	});

});*/

module.exports = router;

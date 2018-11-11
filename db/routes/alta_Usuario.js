var express = require('express');
var router = express.Router();
var User = require('../models/usuario');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('alta_usuario');
});


router.post('/', function(req, res, next){
	var newUser = new User();
	newUser.nombre = req.body.nombre_usuario;
	newUser.apellido = req.body.apellido_usuario;
	newUser.nick = req.body.nick_usuario;
	newUser.contraseña = req.body.password_usuario;

	//request a mongo
	newUser.save(function(err, savedUser){
		if(err){
			console.log(err);
			return res.status(500).send();
		}

		return res.status(200).send();
	});
	res.redirect('/login');

});

module.exports = router;

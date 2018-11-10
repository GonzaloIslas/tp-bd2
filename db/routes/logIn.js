var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/usuario');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login');
});

/*, contraseña: req.body.user_password*/

router.post('/', function(req, res, next){
	
	var nick = req.body.user_name;
	var contraseña = req.body.user_password;
	
	//request a mongo
	User.findOne({nick: nick, contraseña: contraseña}, function(err, user){
		if(err){
			console.log(err);
			return res.status(500).send();
		}

		if(!user){
			return res.render('error',{
				message: 'Usuario o contraseña invalida'
			});
		}

		return res.redirect('/index', user);
	});
});

module.exports = router;

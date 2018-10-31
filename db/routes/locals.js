var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) { ///aca tengo que hacer el get para conseguir la localidad pedida
  res.render('index', { title: 'Express' }); ///
});*/

router.get('/', function (req,res){
	/*res.render(); //aca va el .html del locals*/
	res.render('locals', {
		title: 'the ringer' //aca van las variables para armar el html
	});

});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //request a mongo de toda la data

  res.render('index', {});
});


module.exports = router;

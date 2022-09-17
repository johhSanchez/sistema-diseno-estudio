var express = require('express');
var router = express.Router();
var version = require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', version:version.version });
});

router.get('/navbar', function(req, res, next) {
  res.render('components/navbar', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('desserts', { title: 'Search Results desserts' });
});

module.exports = router;

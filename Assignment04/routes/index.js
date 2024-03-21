var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Destination Website' });
});

router.get('/destination1', function(req, res, next) {
  res.render('destination1', { title: 'Destination 1' });
});

router.get('/destination2', function(req, res, next) {
  res.render('destination2', { title: 'Destination 2' });
});

router.get('/destination3', function(req, res, next) {
  res.render('destination3', { title: 'Destination 3' });
});

router.get('/destination4', function(req, res, next) {
  res.render('destination4', { title: 'Destination 4' });
});

module.exports = router;

var express = require('express');
var apiController = require('../controller/api');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('api', { title: 'API landing page' });
});

router.route('/getResponse')
.get(apiController.response);

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */



// everything here starts with /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Skills' });
});


module.exports = router;

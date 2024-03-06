var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */


// everything here starts with '/skills'

// Get all skills
router.get('/', skillsCtrl.index )

// get one todo --> /skills/:id
router.get('/:skillsId', skillsCtrl.show);



module.exports = router;

var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

/* GET users listing. */


// everything here starts with '/skills'

// Get all skills
router.get('/', skillsCtrl.index )
// GET for the form ---> /skills/new -- order matters, has to be before show
router.get('/new', skillsCtrl.new)
// get one skill --> /skills/:id
router.get('/:skillsId', skillsCtrl.show);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// GET edit a skill --> /skills/:id/edit	
router.get('/:id/edit', skillsCtrl.edit);


// POST a skill --> /skills
router.post('/', skillsCtrl.create)

// DELETE  a skill --> /skill/:id
router.delete('/:id', skillsCtrl.delete);


// PUT /skill/:id
router.put('/:id', skillsCtrl.update);





module.exports = router;

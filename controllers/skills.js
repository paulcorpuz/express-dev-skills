// function noName (req, res, next) {
//     res.send('respond with a resource');
// };

//data from a model, capitalize
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
}
// controllers/todos.js

function index(req, res) {
    res.render('skills/index', {  //what ejs page to render
      skills: Skill.getAll(), // what data 
      title: 'Skill List',
    });
}


function show(req, res) {
    console.log(req.params.skillsId)
    res.render('skills/show', {  //what ejs page to 
        skill: Skill.getOne(req.params.skillsId),
        title: 'Skill Detail',
    })
}


function newSkill(req, res) {
    res.render('skills/new', {
        skill: Skill.getOne(req.params.skillsId),
        title: 'New Skill to Learn'
    })
}

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}
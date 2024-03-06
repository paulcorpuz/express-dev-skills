// function noName (req, res, next) {
//     res.send('respond with a resource');
// };

//data from a model, capitalize
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
}
// controllers/todos.js

function index(req, res) {
    res.render('skills/index', {  //what ejs page to render
      skills: Skill.getAll() // what data 
    });
}


function show(req, res) {
    console.log(req.params.skillsId)
    res.render('skills/show', {  //what ejs page to 
        skill: Skill.getOne(req.params.skillsId)
    })
}
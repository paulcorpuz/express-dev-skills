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
    delete: deleteSkill,
    edit,
    update,
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


function deleteSkill(req, res) {
    // The delete one id
    Skill.deleteOne(req.params.id)
    // needs a response,  a redirect after it deletes, back to Skills
    res.redirect('/skills');
}

// Jimbo lesson
function edit(req, res) {
    const skill = Skill.getOne(req.params.id) //object
    res.render('skills/edit', {  //what ejs page to 
        title: 'Edit Skill',
        skill,
    })
}

// Jimbo lesson
function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body); //used when we made data
    res.redirect(`/skills/${req.params.id}`);
}
const skills = [
    { id: 125502, skill: 'Learn Javascript', done: false },
    { id: 125503, skill: 'Learn CSS', done: false },
    { id: 125504, skill: 'Learn HTML', done: false },
    { id: 125501, skill: 'Learn Express', done: false },
    { id: 1255005, skill: 'Learn Python', done: false },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    const skill = skills.find(skill => skill.id === id)
    return skill;
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1) //splice, what index and how many to delete
};
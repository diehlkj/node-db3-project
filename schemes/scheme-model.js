const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find() {
    // select *
    // from [schemes]
    return db('schemes')
}   //  Tested & Working

function findById(id) {
    // select *
    // from [schemes]
    // where id = id
    return db('schemes')
        .where({ id })
}   //  Tested & Working

function findSteps(id) {
    // select [steps].id, [schemes].scheme_name, [steps].step_number, [steps].instructions
    // from [schemes]
    // join [steps]
    // on [schemes].id = [steps].scheme_id
    // where id = id
    return db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({ scheme_id: id })
        .orderBy('steps.step_number')
}   //  Tested & Working

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(newScheme => {
            return findById(newScheme[0]);
        });
}   //  Tested & Working

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
}   //  Tested & Working

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del()
}   //  Tested & Working


function addStep(stepData, id) {
    return db('steps')
        // .insert(stepData)
        .insert([{ scheme_id: id, step_number: stepData.step_number, instructions: stepData.instructions }])
}

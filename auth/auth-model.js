const db = require('../database/dbConfig.js');


module.exports = {

    add,
    findBy
   
}


async function add(user) {
    return db('users')
    .insert(user, 'id')
}


function findBy(filter) {
    return db('users').where(filter);
  }
const db = require('../database/dbConfig.js');


module.exports = {

    add
   
}


async function add(user) {
    return db('users')
    .insert(user, 'id')
}
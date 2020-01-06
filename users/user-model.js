const db = require('../database/dbConfig')





module.exports = {

    findUserId,
    updateUser

}


function findUserId(id) {
    return db('users')
        .where({id: id})
}

function updateUser(user) {
    return db('users')
        .where({id: user.id})
        .update(user)
        .then(() => {
            return findUserId(user.id)
        })
}
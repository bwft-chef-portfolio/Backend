const db = require(`../database/dbConfig`)




module.exports = {

    getRecipes
}




function getRecipes() {
    return db(`recipe`)
}
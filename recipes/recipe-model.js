const db = require(`../database/dbConfig`)




module.exports = {

    getRecipes,
    addRecipe
   
}




function getRecipes() {
    return db(`recipe`)
}

// function findId(id) {
//     return db('recipe')
//         .where({user_id: id})
//         .first()
// }

function addRecipe(recipe) {
    return db
        .insert(recipe, 'id') 
        .into('recipe')
}
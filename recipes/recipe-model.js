const db = require(`../database/dbConfig`)




module.exports = {

    getRecipes,
    addRecipe,
    updateRecipe,
    findId,
    removeRecipe
   
}




function getRecipes() {
    return db(`recipe`)
}

function findId(id) {
    return db('recipe')
        .where({user_id: id})
        
}

function addRecipe(recipe) {
    return db
        .insert(recipe, 'id') 
        .into('recipe')
}


function updateRecipe(recipe) {
    return db('recipe')
        .where({id: recipe.id})
        .update(recipe)
        .then(() => {
            return findId(recipe.id)
        })
}

function removeRecipe(recipe) {
    return db('recipe')
        .where('id',recipe)
        .del();
}

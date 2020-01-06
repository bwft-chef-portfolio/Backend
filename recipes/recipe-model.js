const db = require(`../database/dbConfig`)




module.exports = {

    getRecipes,
    addRecipe,
    updateRecipe,
    findId,
    removeRecipe
   
}




function getRecipes() {
    return db('recipe')
    .select('recipe.id','users.username','users.email','users.first_name','users.last_name','users.phone','users.location','recipe.type','recipe.img_url','recipe.title','recipe.description','recipe.ingredients','recipe.instructions')
    .join('users', 'recipe.user_id', 'users.id')
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

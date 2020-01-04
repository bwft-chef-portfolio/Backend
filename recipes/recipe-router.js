const router = require('express').Router();


const Recipes = require('./recipe-model.js')




router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => res.send(err))
})








router.post('/', (req, res) => {
    const recipe = req.body;

   
})





  
module.exports = router;
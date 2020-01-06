const router = require('express').Router();
const authorized = require('../auth/auth-middleware')

const Recipes = require('./recipe-model.js')




router.get('/',  (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => res.send(err))
})





router.post('/', authorized, (req, res) => {
    const recipeData = req.body

    Recipes.addRecipe(recipeData)
    .then(newRecipe => {
        res.status(201).json(newRecipe)
    })
    .catch (err => {
        res.status(500).json({ message: "failed, make sure you have all the needed fields"})
    })
})


router.put('/:id', authorized, (req, res) => {
    const recipeData = { ...req.body, id: req.params.id}
   
    console.log(recipeData)
    Recipes.updateRecipe(recipeData)
        .then(edit => {
            res.status(201).json(recipeData)
        })
        .catch (err => {
            res.status(500).json({ message: "failed, make sure you have all the needed fields"})
        })
})
  
module.exports = router;
const router = require('express').Router();
const authorized = require('../auth/auth-middleware')

const Recipes = require('./recipe-model.js')




router.get('/',  (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch (err => { 
        res.status(500).json({ message: "failed getting data"})
        })
})



router.get('/:id', authorized, (req, res) => {
    Recipes.findId(req.params.id)
    .then (recipes => {
        res.json(recipes)
    })
    .catch (err => { 
    res.status(500).json({ message: "failed getting data make sure you have the right ID"})
    })
})


router.get('/:id/recipe', authorized, (req, res) => {
    Recipes.getRecipe(req.params.id)
    .then (recipes => {
        res.json(recipes)
    })
    .catch (err => { 
    res.status(500).json({ message: "failed getting data make sure you have the right ID"})
    })
})

router.get("/type/:type", (req, res) => {
    Recipes.byMealType(req.params)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch (err => {
            res.status(500).json({ message: "recipe type not found"})
        })
})

router.get("/username/:username", (req, res) => {
    Recipes.byUsername(req.params)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch (err => {
            res.status(500).json({ message: "recipe type not found"})
        })
})

router.get("/title/:title", (req, res) => {
    Recipes.byTitle(req.params)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch (err => {
            res.status(500).json({ message: "recipe  not found"})
        })
})

router.get("/ingredients/:ingredients", (req, res) => {
    Recipes.byTitle(req.params)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch (err => {
            res.status(500).json({ message: "recipe ingredient not found"})
        })
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
            res.status(500).json({ message: "failed, make sure you have all the needed fields and the correct ID"})
        })
})

router.delete('/:id', authorized, (req,res)=> {
    const id = req.params.id

    Recipes.removeRecipe(id)
    .then(recipe => {
        res.status(200).json({ message: "deleted"})
    })
    .catch(err => {
        res.status(500).json({ message: "failed to delete, Make sure you have the right ID"})
    })
})
  
module.exports = router;
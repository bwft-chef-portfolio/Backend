const router = require('express').Router();
const authorized = require(`../auth/auth-middleware`)



const Users = require('./user-model')



router.get('/:id', authorized, (req, res) => {
    Users.findUserId(req.params.id)
    .then (user => {
        res.json(user)
    })
    .catch(err => res.send(err))
})





router.put('/:id', authorized, (req, res) => {
    const userData = { ...req.body, id: req.params.id}
   
    console.log(userData)
    Users.updateUser(userData)
        .then(edit => {
            res.status(201).json(userData)
        })
        .catch (err => {
            res.status(500).json({ message: "failed, make sure you have all the needed fields and the right ID"})
        })
    })
module.exports = router;
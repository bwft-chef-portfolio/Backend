const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const Users = require("./auth-model")





router.post('/register', (req, res) => {

    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error)
        })

})












function signToken(user) {
    const payload = {
      username: user.username,
      
    };
  
    const secret = process.env.JWT_SECRET || "key";
  
    const options = {
      expiresIn: "1d",
    };
  
    return jwt.sign(payload, secret, options); 
  }
  
  
  
  
  
  module.exports = router;
const express =require('express')
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/auth-middleware.js');

const authRouter = require('../auth/auth-router.js');
const recipeRouter = require('../recipes/recipe-router')
const userRouter = require('../users/user-router')


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/auth', authRouter)

server.use('/api/recipes', recipeRouter)
server.use('/api/users', userRouter)


server.get('/', (req, res) => {
    res.status(200).json({ server: "server is up"})
})


module.exports = server;
const express =require('express')
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/auth-middleware.js');

const authRouter = require('../auth/auth-router.js');


const server = express();


server.use(express.json());


server.use('/api/auth', authRouter)



server.get('/', (req, res) => {
    res.status(200).json({ server: "server is up"})
})


module.exports = server;
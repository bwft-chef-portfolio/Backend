const express =require('express')
const cors = require('cors');
const helmet = require('helmet');






const server = express();


server.use(express.json());





server.get('/', (req, res) => {
    res.status(200).json({ server: "server is up"})
})


module.exports = server;
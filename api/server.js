const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet()),express.json();

server.get('/', (req, res) =>{
    res.send('I\'m awake I\'m awake...')
})

module.exports = server;
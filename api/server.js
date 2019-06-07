const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../Projects/projects-router');
const actionRouter = require('../Actions/actions-router');

const server = express();

server.use(helmet()),express.json();

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) =>{
    res.send('I\'m awake I\'m awake...')
})

module.exports = server;
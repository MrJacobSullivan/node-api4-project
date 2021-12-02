const express = require('express');

const { logger, errorHandling } = require('./middleware/middleware');

const usersRouter = require('./users/users-router');

const server = express();

server.use(express.json());
server.use(logger);

server.use('/api/users', usersRouter);

server.use(errorHandling);

module.exports = server;

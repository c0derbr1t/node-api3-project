const express = require('express');
const cors = require('cors');

const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js');

const Users = require('./users/userDb.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/users', logger, userRouter);
server.use('/api/posts', logger, postRouter);

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Wooo! We're Live!!!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} request to ${req.originalUrl} at [${new Date().toISOString()}] `);
  next();
};


module.exports = server;

const express = require('express');

const router = express.Router();

const { validateUser } = require('../middleware/middleware');

const Users = require('./users-model');

router.get('/users', async (req, res, next) => {
  try {
    const users = await Users.get();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.post('/register', validateUser, async (req, res, next) => {
  try {
    const user = await Users.insert({ username: req.body.username, password: req.body.password });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

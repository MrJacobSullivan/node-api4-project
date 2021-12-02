const express = require('express');

const router = express.Router();

const { validateUser } = require('../middleware/middleware');

router.get('/', async (req, res, next) => {
  try {
    const users = [];
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

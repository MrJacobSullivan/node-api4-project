const bcrypt = require('bcrypt');

const Users = require('../users/users-model');

const logger = (req, res, next) => {
  console.log('request method:', req.method);
  console.log('request url:', req.url);
  console.log('timestamp:', Date.now());

  next();
};

const validateUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next({ status: 404, message: 'Username and Password are required.' });
  } else {
    const encryptedPassword = await bcrypt.hash(password, 10);

    req.user = { username, encryptedPassword };
    next();
  }
};

const validateUserId = async (req, res, next) => {
  try {
    const user = await Users.getById(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      next({ status: 404, message: 'User not found.' });
    }
  } catch (err) {
    next(err);
  }
};

const validateAuth = async (req, res, next) => {
  const { password } = req.body;
  const { encryptedPassword } = req.user;

  console.log(password);
  console.log(encryptedPassword);

  try {
    const isMatch = await bcrypt.compare(password, encryptedPassword);
    console.log(isMatch);

    if (!isMatch) {
      next({ status: 401, message: 'Password does not match.' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line
const errorHandling = (err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
};

module.exports = {
  logger,
  validateUser,
  validateUserId,
  validateAuth,
  errorHandling,
};

const logger = (req, res, next) => {
  console.log('request method:', req.method);
  console.log('request url:', req.url);
  console.log('timestamp:', Date.now());

  next();
};

const validateUser = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next({ status: 404, message: 'Username and Password are required.' });
  } else {
    req.user = { username, password };
    next();
  }
};

// eslint-disable-next-line
const errorHandling = (err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
};

module.exports = {
  logger,
  validateUser,
  errorHandling,
};

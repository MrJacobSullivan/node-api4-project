const isValidUser = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !username.trim() || !password || !password.trim()) {
    next({ status: 404, message: 'Username and Password are required.' });
  } else {
    req.user = { username, password };
    next();
  }
};

module.exports = {
  isValidUser,
};

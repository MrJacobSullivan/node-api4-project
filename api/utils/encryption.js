const encrypt = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (err) {
    throw new Error('password encryption failed');
  }
};

const compare = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (err) {
    throw new Error('password comparison failed');
  }
};

module.exports = {
  encrypt,
  compare,
};

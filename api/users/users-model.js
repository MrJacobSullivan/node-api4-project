const shortid = require('shortid');

const users = [
  { id: shortid.generate(), username: 'Foo' },
  { id: shortid.generate(), username: 'Bar' },
  { id: shortid.generate(), username: 'Baz' },
];

const get = () => {
  // db call goes here

  return users.map((user) => ({
    id: user.id,
    username: user.username,
  }));
};

const insert = (user) => {
  // db call goes here

  users.push({ id: shortid.generate(), ...user });

  return users[users.length - 1];
};

module.exports = {
  get,
  insert,
};

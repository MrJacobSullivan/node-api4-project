const get = () => {
  // db call goes here

  return [
    { id: 1, username: 'Foo' },
    { id: 2, username: 'Bar' },
    { id: 3, username: 'Baz' },
  ];
};

const insert = (user) => {
  // db call goes here

  return { id: 4, ...user };
};

module.exports = {
  get,
  insert,
};

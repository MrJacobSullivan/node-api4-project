const shortid = require('shortid');

const Encryption = require('../utils/encryption');

const users = [
  {
    id: shortid.generate(),
    username: 'Foo',
    password: '$2b$10$jWq3VCv6it3qiF9woZCAxO3llz0nr4XVaGc2Efi056QOWnVJVpK5a',
  },
  {
    id: shortid.generate(),
    username: 'Bar',
    password: '$2b$10$Jei8DJhPO2RDDBdKlrW5feycu/8IHPdGb2i.rp7c.6lerEfFyTO5i',
  },
  {
    id: shortid.generate(),
    username: 'Baz',
    password: '$2b$10$bkta63ZPDX2C.IwS8vB4UuunVWDCzAmb4DhYOHH2X7UDzHQK7WnFC',
  },
];

const get = () => {
  // db call goes here

  return users.map((user) => ({
    id: user.id,
    username: user.username,
  }));
};

const getById = (id) => {
  return users.find((user) => user.id === id);
};

const insert = (user) => {
  // db call goes here

  users.push({ ...user, id: shortid.generate() });

  return users[users.length - 1];
};

module.exports = {
  get,
  getById,
  insert,
};

const jwt = require('jsonwebtoken');

const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;
const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // https://regexr.com/3e48o

const registerNewUser = async (displayName, email, password, image) => {
  if (displayName.length < 8) {
    return { status: 400, message: '"displayName" length must be at least 8 characters long' };
  } if (emailRegex.test(email) === false) {
    return { status: 400, message: '"email" must be a valid email' };
  } if (password.length < 6) {
    return { status: 400, message: '"password" length must be at least 6 characters long' };
  } const register = await User.findOne({ where: { email } });
    if (register !== null) {
    return { status: 409, message: 'User already registered' };
  }
  
  const newUser = await User.create({ displayName, email, password, image });
  
  delete newUser.dataValues.password;

  const token = jwt.sign(newUser.dataValues, SECRET, JWT_CONFIG);
  
  return { status: 201, token };
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });

  return users;
};

const getUsersById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });

  if (user === null) {
    return { status: 404, message: 'User does not exist' };
  }

  return { status: 200, user };
};

module.exports = {
  registerNewUser,
  getUsers,
  getUsersById,
};

const jwt = require('jsonwebtoken');

const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;
const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const login = async (email, password) => {
  const register = await User.findOne({ where: { email, password } });
  if (!email || !password) {
    return { status: 400, message: 'Some required fields are missing' };
  } if (!register) {
    return { status: 400, message: 'Invalid fields' };
  }

  delete register.dataValues.password;

  const token = jwt.sign(register.dataValues, SECRET, JWT_CONFIG);

  return { status: 200, token };
};

module.exports = {
  login,
};

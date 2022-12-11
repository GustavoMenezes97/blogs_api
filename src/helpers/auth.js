const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  let payload;
  try {
    payload = jwt.verify(authorization, SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;

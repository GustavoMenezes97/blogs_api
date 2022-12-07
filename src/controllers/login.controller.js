const LoginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, message, token } = await LoginService.login(email, password);

  res.status(status).json(status === 200 ? { token } : { message });
};

module.exports = {
  login,
};

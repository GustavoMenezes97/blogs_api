const UserService = require('../services/user.service');

const registerNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, message, token } = await UserService.registerNewUser(
    displayName, email, password, image,
    );

  res.status(status).json(status === 201 ? { token } : { message });
};

module.exports = {
  registerNewUser,
};

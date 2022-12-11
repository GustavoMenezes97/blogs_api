const UserService = require('../services/user.service');

const registerNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, message, token } = await UserService.registerNewUser(
    displayName, email, password, image,
    );

  res.status(status).json(status === 201 ? { token } : { message });
};

const getUsers = async (req, res) => {
  const users = await UserService.getUsers();

  res.status(200).json(users);
};

module.exports = {
  registerNewUser,
  getUsers,
};

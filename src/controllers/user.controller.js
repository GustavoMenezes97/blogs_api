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

const getUsersById = async (req, res) => {
  const id = Number(req.params.id);

  const { status, user, message } = await UserService.getUsersById(id);

  res.status(status).json(status === 200 ? user : { message });
};

module.exports = {
  registerNewUser,
  getUsers,
  getUsersById,
};

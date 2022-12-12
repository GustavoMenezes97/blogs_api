const express = require('express');
const auth = require('../helpers/auth');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.post('/', UserController.registerNewUser);

router.get('/', auth, UserController.getUsers);

router.get('/:id', auth, UserController.getUsersById);

module.exports = router;

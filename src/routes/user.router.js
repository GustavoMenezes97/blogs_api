const express = require('express');
const UserController = require('../controllers/user.controller');
const auth = require('../helpers/auth');

const router = express.Router();

router.post('/', UserController.registerNewUser);

router.get('/', auth, UserController.getUsers);

router.get('/:id', auth, UserController.getUsersById);

module.exports = router;

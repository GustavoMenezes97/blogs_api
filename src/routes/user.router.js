const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.post('/', UserController.registerNewUser);

module.exports = router;

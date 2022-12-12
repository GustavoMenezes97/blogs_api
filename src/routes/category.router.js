const express = require('express');
const auth = require('../helpers/auth');
const CategoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', auth, CategoryController.registerNewCategory);

module.exports = router;

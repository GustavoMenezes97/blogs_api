const express = require('express');
const auth = require('../helpers/auth');
const CategoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', auth, CategoryController.registerNewCategory);

router.get('/', auth, CategoryController.getCategories);

module.exports = router;

const express = require('express');
const auth = require('../helpers/auth');
const BlogPostController = require('../controllers/blogPost.controller');

const router = express.Router();

router.get('/', auth, BlogPostController.getBlogPosts);

router.get('/:id', auth, BlogPostController.getBlogPostById);

module.exports = router;

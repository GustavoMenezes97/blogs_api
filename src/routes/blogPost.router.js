const express = require('express');
const auth = require('../helpers/auth');
const BlogPostController = require('../controllers/blogPost.controller');

const router = express.Router();

router.get('/', auth, BlogPostController.getBlogPosts);

module.exports = router;

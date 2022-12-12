const BlogPostService = require('../services/blogPost.service');

const getBlogPosts = async (req, res) => {
  const blogPosts = await BlogPostService.getBlogPosts();

  return res.status(200).json(blogPosts);
};

const getBlogPostById = async (req, res) => {
  const id = Number(req.params.id);
  
  const { status, blogPost, message } = await BlogPostService.getBlogPostById(id);

  return res.status(status).json(status === 200 ? blogPost : { message });
};

module.exports = {
  getBlogPosts,
  getBlogPostById,
};

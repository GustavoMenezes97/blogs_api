const { BlogPost, User, Category } = require('../models');

const getBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });

  return blogPosts;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findOne({
    where: id,
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });

  if (blogPost === null) {
    return { status: 404, message: 'Post does not exist' };
  }

  return { status: 200, blogPost };
};

module.exports = {
  getBlogPosts,
  getBlogPostById,
};

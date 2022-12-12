const CategoryService = require('../services/category.service');

const registerNewCategory = async (req, res) => {
  const { name } = req.body;

  const { status, newCategory, message } = await CategoryService.registerNewCategory(name);

  return res.status(status).json(status === 201 ? newCategory : { message });
};

module.exports = {
  registerNewCategory,
};

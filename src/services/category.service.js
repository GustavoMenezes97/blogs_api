const { Category } = require('../models');

const registerNewCategory = async (name) => {
  if (!name) {
    return { status: 400, message: '"name" is required' };
  }

  const newCategory = await Category.create({ name });
  
  return { status: 201, newCategory };
};

module.exports = {
  registerNewCategory,
};

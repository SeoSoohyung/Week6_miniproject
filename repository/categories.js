const { Categories } = require("../models");

class CategoriesRepository {
  createCategory = async (name) => {
    await Categories.create({ name });
    return;
  };

  findOneCategory = async (id) => {
    const categories = await Categories.findOne({ where: { id } });
    return categories;
  };
}

module.exports = CategoriesRepository;

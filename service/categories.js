const CategoriesRepository = require("../repository/categories");

class CategoriesService {
  categoriesRepository = new CategoriesRepository();
  createCategories = async (name) => {
    await this.categoriesRepository.createCategory(name);
    return;
  };
}

module.exports = CategoriesService;

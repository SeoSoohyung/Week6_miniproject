const CategoriesService = require("../service/categories");
const newCategories = { name: "코드" };

class CategoriesController {
  categoriesService = new CategoriesService();

  createCategories = async (req, res, next) => {
    try {
      const { name } = req.body;
      await this.categoriesService.createCategories(name);
      res.status(200).send("게시글 생성에 성공했습니다");
    } catch (err) {
      next(err);
    }
  };
}

module.exports = CategoriesController;

const express = require("express");
const router = express.Router();
const CategoriesController = require("../controller/categories");
const categoriesController = new CategoriesController();
router.post("/", categoriesController.createCategories);
// router.put("/");
// router.delete("/");

module.exports = router;

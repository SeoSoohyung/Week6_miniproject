const express = require("express");
const router = express.Router();

const PostsController = require("../controller/posts");
const postsController = new PostsController();
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/:categoryId", authMiddleware, postsController.createPost);

module.exports = router;

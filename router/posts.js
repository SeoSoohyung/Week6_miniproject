const express = require("express");
const router = express.Router();

const PostsController = require("../controller/posts");
const postsController = new PostsController();
const authMiddleware = require("../middlewares/auth-middleware");
// posts middleware
router.post("/", authMiddleware, postsController.createPost);
router.get("/:categoryId", postsController.findAllPost);
router.get("/:categoryId/:postId", postsController.findOnePost);
router.patch("/:postId", authMiddleware, postsController.updatePost);
router.delete("/:postId", authMiddleware, postsController.deletePost);

module.exports = router;

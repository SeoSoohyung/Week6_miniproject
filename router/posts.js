const express = require("express");
const router = express.Router();

const PostsController = require("../controller/posts");
const postsController = new PostsController();
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/:categoryId", authMiddleware, postsController.createPost);
router.get("/:categoryId", postsController.findAllPost);
router.patch(
  "/:categoryId/:postId",
  authMiddleware,
  postsController.updatePost
);
router.delete(
  "/:categoryId/:postId",
  authMiddleware,
  postsController.deletePost
);

module.exports = router;

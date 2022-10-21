const express = require("express");
const router = express.Router();
const CommentsController = require("../controller/comments");
const commentsController = new CommentsController();
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/:postId", authMiddleware, commentsController.createComment);
router.post("/:postId/:commentNum",authMiddleware,commentsController.createComment);
router.patch("/:postId/:commentId/:commentNum",authMiddleware,commentsController.updateComment);
router.delete("/:postId/:commentNum",authMiddleware,commentsController.deleteComment);

module.exports = router;

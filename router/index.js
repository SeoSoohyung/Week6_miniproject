const express = require("express");
const router = express.Router();

const postsRouter = require("./posts");
const membersRouter = require("./member");
const commentsRouter = require("./comments");
const categories = require("./categories");
router.use("/posts", postsRouter);
router.use("/members", membersRouter);
router.use("/comments", commentsRouter);
router.use("/category", categories);
module.exports = router;

const express = require("express");
const router = express.Router();

// const commentsRouter = require("./comments");
const postsRouter = require("./posts");
// const membersRouter = require("../router/member");

// router.use("/comments", commentsRouter);
// router.use("/members", membersRouter);
router.use("/posts", postsRouter);

module.exports = router;

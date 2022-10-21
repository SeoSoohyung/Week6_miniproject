const express = require("express");
const router = express.Router();

// const commentsRouter = require("./comments");

const postsRouter = require("./posts");
const membersRouter = require("./member");

// router.use("/comments", commentsRouter);
// router.use("/members", membersRouter);
router.use("/posts", postsRouter);

// const postsRouter = require("./posts");
const members = require("/member", membersRouter);

// router.use("/comments", commentsRouter);
router.use("/members", members);
// router.use("/posts", postsRouter);

module.exports = router;

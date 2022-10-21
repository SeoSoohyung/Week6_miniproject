const express = require("express");
const router = express.Router();

// const commentsRouter = require("./comments");
// const postsRouter = require("./posts");
const members = require("../router/member");

// router.use("/comments", commentsRouter);
router.use("/members", members);
// router.use("/posts", postsRouter);

module.exports = router;
const express = require("express");
const router = express.Router();

const postsRouter = require("./posts");
const membersRouter = require("./member");

router.use("/posts", postsRouter);
router.use("/members", membersRouter);

module.exports = router;

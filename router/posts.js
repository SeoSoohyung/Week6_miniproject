const express = require("express");
const router = express.Router();

const PostsController = require("../controller/posts.controller");
const postsController = new PostsController();

router.post("/", postsController.createPost);

module.exports = router;

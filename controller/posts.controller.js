const PostsService = require("../service/posts");

class PostsController {
  postsService = new PostsService();

  createPost = async (req, res, next) => {
    const { categoryId, title, content, userId, nickname } = req.body;

    await this.postsService.createPost(
      categoryId,
      title,
      content,
      userId,
      nickname
    );

    res.status(201).send("게시글이 생성되었습니다");
  };
}

module.exports = PostsController;

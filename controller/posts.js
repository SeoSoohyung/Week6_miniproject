const PostsService = require("../service/posts");

class PostsController {
  postsService = new PostsService();

  createPost = async (req, res, next) => {
    const { categoryId } = req.params;
    const { title, content } = req.body;
    const { id, nickname } = res.locals.user;
    console.log(id);
    await this.postsService.createPost(
      categoryId,
      title,
      content,
      id,
      nickname
    );

    res.status(201).send("게시글이 생성되었습니다");
  };
}

module.exports = PostsController;

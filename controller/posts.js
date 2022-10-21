const PostsService = require("../service/posts");

class PostsController {
  postsService = new PostsService();

  createPost = async (req, res, next) => {
    const { categoryId } = req.params;
    const { title, content } = req.body;
    const { id, nickname } = res.locals.user;
    await this.postsService.createPost(
      categoryId,
      title,
      content,
      id,
      nickname
    );

    res.status(201).send("게시글이 생성되었습니다");
  };

  findAllPost = async (req, res, next) => {
    const { categoryId } = req.params;
    const findAllPost = await this.postsService.findAllPost(categoryId);
    res.status(200).json({ findAllPost });
  };
}

module.exports = PostsController;

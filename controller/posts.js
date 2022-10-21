const PostsService = require("../service/posts");

class PostsController {
  postsService = new PostsService();

  createPost = async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      const { title, content } = req.body;
      const { userId, nickname } = res.locals.user;
      await this.postsService.createPost(
        categoryId,
        title,
        content,
        userId,
        nickname
      );
      res.status(201).send("게시글이 생성되었습니다");
    } catch (err) {
      res.status(400).send("게시글 생성에 실패하였습니다");
    }
  };

  findAllPost = async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      const findAllPost = await this.postsService.findAllPost(categoryId);
      res.status(200).json({ findAllPost });
    } catch (err) {
      res.status(400).send("게시글을 불러오지 못했습니다");
    }
  };

  updatePost = async (req, res, next) => {
    try {
      const { categoryId, postId } = req.params;
      const { title, content } = req.body;
      const { userId } = res.locals.user;
      await this.postsService.updatePost(
        categoryId,
        postId,
        title,
        content,
        userId
      );
      res.status(200).send("게시글을 수정하였습니다");
    } catch (err) {
      res.status(400).send("게시글 수정에 실패하였습니다");
    }
  };

  deletePost = async (req, res, next) => {
    try {
      const { categoryId, postId } = req.params;
      const { userId } = res.locals.user;
      await this.postsService.deletePost(categoryId, postId, userId);
      res.status(201).send("게시글을 삭제하였습니다");
    } catch (err) {
      res.status(400).send("게시글 삭제에 실패하였습니다");
    }
  };
}

module.exports = PostsController;

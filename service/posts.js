const PostsRepository = require("../repository/posts");

class PostsService {
  postsRepository = new PostsRepository();

  createPost = async (categoryId, title, content, userId, nickname) => {
    await this.postsRepository.createPost(
      categoryId,
      title,
      content,
      userId,
      nickname
    );
    return;
  };

  findAllPost = async (categoryId) => {
    const findAllPost = await this.postsRepository.findAllPost(categoryId);
    return findAllPost;
  };
}

module.exports = PostsService;

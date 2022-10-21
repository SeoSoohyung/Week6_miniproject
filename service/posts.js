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

  updatePost = async (categoryId, postId, title, content, id) => {
    await this.postsRepository.updatepost(
      categoryId,
      postId,
      title,
      content,
      id
    );
    return;
  };

  deletePost = async (categoryId, postId, id) => {
    await this.postsRepository.deletePost(categoryId, postId, id);
  };
  return;
}

module.exports = PostsService;

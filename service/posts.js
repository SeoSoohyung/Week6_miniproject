const PostsRepository = require("../repository/posts");
const CommentsRepository = require("../repository/comments");

class PostsService {
  postsRepository = new PostsRepository();
  commentsRepository = new CommentsRepository();
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

  // findOnePost = async (postId) => {
  //   const findOnePost = await this.postsRepository.findOnePost(postId);

  // };

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

  deletePost = async (categoryId, postId, userId) => {
    await this.postsRepository.deletePost(categoryId, postId, userId);
  };
  return;
}

module.exports = PostsService;

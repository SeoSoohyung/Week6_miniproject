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
    try {
      const findAllPost = await this.postsRepository.findAllPost(categoryId);
      return findAllPost;
    } catch (err) {
      throw new Error("게시글 목록을 불러오지 못했습니다");
    }
  };

  findOnePost = async (categoryId, postId) => {
    try {
      const findOnePost = await this.postsRepository.findOnePost(
        categoryId,
        postId
      );
      const findAllComment = await this.commentsRepository.findComment(postId);
      const result = {
        findOnePost,
        findAllComment,
      };
      return result;
    } catch (err) {
      throw new Error("게시글 조회에 실패했습니다");
    }
  };

  updatePost = async (categoryId, postId, title, content, userId) => {
    await this.postsRepository.updatepost(
      categoryId,
      postId,
      title,
      content,
      userId
    );
    return;
  };

  deletePost = async (categoryId, postId, userId) => {
    await this.postsRepository.deletePost(categoryId, postId, userId);
  };
  return;
}

module.exports = PostsService;

const PostsRepository = require("../repository/posts");
const CommentsRepository = require("../repository/comments");
const CategoriesRepository = require("../repository/categories");
class PostsService {
  categoriesRepository = new CategoriesRepository();
  postsRepository = new PostsRepository();
  commentsRepository = new CommentsRepository();
  createPost = async (name, title, content, userId, nickname) => {
    await this.postsRepository.createPost(
      name,
      title,
      content,
      userId,
      nickname
    );
    return;
  };

  findAllPost = async () => {
    try {
      const findAllPost = await this.postsRepository.findAllPost();
      return findAllPost;
    } catch (err) {
      throw new Error("게시글 목록을 불러오지 못했습니다");
    }
  };

  findOnePost = async (postId) => {
    // try {
    const findOnePost = await this.postsRepository.findOnePost(postId);
    const findAllComment = await this.commentsRepository.findComment(postId);
    const result = {
      findOnePost,
      findAllComment,
    };
    return result;
    // } catch (err) {
    // throw new Error("게시글 조회에 실패했습니다");
    // }
  };

  updatePost = async (name, postId, title, content, userId) => {
    await this.postsRepository.updatepost(name, postId, title, content, userId);
    return;
  };

  deletePost = async (name, postId, userId) => {
    await this.postsRepository.deletePost(name, postId, userId);
    return;
  };
}

module.exports = PostsService;

const { Posts, sequelize } = require("../models");

class PostsRepository {
  constructor() {
    this.Posts = Posts;
  }
  createPost = async (name, title, content, userId, nickname) => {
    try {
      await this.Posts.create({
        name,
        title,
        content,
        userId,
        nickname,
      });
      return;
    } catch (err) {
      throw new Error("게시글 생성에 실패했습니다");
    }
  };

  findAllPost = async () => {
    try {
      const findAllPost = await Posts.findAll();
      return findAllPost;
    } catch (err) {
      throw new Error("게시글 목록을 불러오지 못했습니다");
    }
  };

  findOnePost = async (postId, categoryId) => {
    try {
      const post = await Posts.findOne({ where: { postId, name: categoryId } });
      return post;
    } catch (err) {
      throw new Error("게시글 조회에 실패했습니다");
    }
  };

  updatepost = async (name, postId, title, content, userId) => {
    try {
      const updatePost = await Posts.update(
        { title, content },
        { where: { name, postId, userId } }
      );
      return updatePost;
    } catch (err) {
      throw new Error("자신의 게시글이 맞는지 확인해 주세요");
    }
  };

  deletePost = async (name, postId, userId) => {
    try {
      await Posts.destroy({
        where: { name, postId, userId },
      });
      return;
    } catch (err) {
      throw new Error("자신의 게시글이 맞는지 확인해 주세요");
    }
  };
}

module.exports = PostsRepository;

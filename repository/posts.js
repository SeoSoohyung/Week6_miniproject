const { Posts, sequelize } = require("../models");

class PostsRepository {
  createPost = async (categoryId, title, content, userId, nickname) => {
    try {
      await Posts.create({ categoryId, title, content, userId, nickname });
      return;
    } catch (err) {
      throw new Error("게시글 생성에 실패했습니다");
    }
  };

  findAllPost = async (categoryId) => {
    try {
      const findAllPost = await Posts.findOne({ where: { categoryId } });
      return findAllPost;
    } catch (err) {
      throw new Error("게시글 목록을 불러오지 못했습니다");
    }
  };

  findOnePost = async (categoryId, postId) => {
    try {
      const post = await Posts.findOne({ where: { categoryId } });
      return post;
    } catch (err) {
      throw new Error("게시글 조회에 실패했습니다");
    }
  };

  updatepost = async (categoryId, postId, title, content, userId) => {
    try {
      const updatePost = await Posts.update(
        { title, content },
        { where: { categoryId, postId, userId } }
      );
      return updatePost;
    } catch (err) {
      throw new Error("자신의 게시글이 맞는지 확인해 주세요");
    }
  };

  deletePost = async (categoryId, postId, id) => {
    try {
      await Posts.destroy({
        where: { categoryId, id: postId, userId: id },
      });
      return;
    } catch (err) {
      throw new Error("자신의 게시글이 맞는지 확인해 주세요");
    }
  };
}

module.exports = PostsRepository;

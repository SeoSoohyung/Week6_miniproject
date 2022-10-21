const { Posts, sequelize } = require("../models");

class PostsRepository {
  createPost = async (categoryId, title, content, userId, nickname) => {
    await Posts.create({ categoryId, title, content, userId, nickname });
    return;
  };

  findAllPost = async (categoryId) => {
    const findAllPost = await Posts.findOne({ where: { categoryId } });
    return findAllPost;
  };
}

module.exports = PostsRepository;

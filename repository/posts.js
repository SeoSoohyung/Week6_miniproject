const { Posts, sequelize } = require("../models");

class PostsRepository {
  createPost = async (categoryId, title, content, userId, nickname) => {
    await Posts.create({ categoryId, title, content, userId, nickname });
    return;
  };
}

module.exports = PostsRepository;

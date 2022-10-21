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

  updatepost = async (categoryId, postId, title, content, id) => {
    const updatePost = await Posts.update(
      { title, content },
      { where: { categoryId, id: postId, userId: id } }
    );
    return updatePost;
  };

  deletePost = async (categoryId, postId, id) => {
    await Posts.destroy({
      where: { categoryId, id: postId, userId: id },
    });
    return;
  };
}

module.exports = PostsRepository;

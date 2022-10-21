const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (
    postId, commentNum, userId, comment, level
  ) => {
    await Comments.create({
      postId, commentNum, userId, comment, level
    });
    return;
  };

  updateComment = async (level, comment) => {
    await Comments.update({ level, comment }, { where: { level, comment } });
    return;
  };

  deleteComment = async (commentId) => {
    await Comments.destroy({ where: { commentId } });
    return;
  };
}

module.exports = CommentsRepository;

const { Comments } = require("../models");

class CommentsRepository {
  createComment = async (postId, commentNum, userId, comment, level) => {
    await Comments.create({ postId, commentNum, userId, comment, level });
    return;
  };

  updateComment = async (comment, level, commentId) => {
    await Comments.update({ level, comment }, { where: { commentId } });
    return;
  };

  deleteComment = async ( postId, commentId, userId ) => {
    await Comments.destroy({ where: { postId, commentId, userId } });
    return;
  };
}

module.exports = CommentsRepository;

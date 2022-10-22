const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, commentNum, userId, comment, level) => {
    await this.commentsRepository.createComment(
      postId,
      commentNum,
      userId,
      comment,
      level
    );
    return;
  };
  updateComment = async (userId, comment, commentId) => {
    await this.commentsRepository.updateComment(userId, comment, commentId);
    return;
  };
  deleteComment = async (commentId, userId) => {
    await this.commentsRepository.deleteComment(commentId, userId);
    return;
  };
}

module.exports = CommentsService;

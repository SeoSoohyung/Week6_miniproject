const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, userId, comment, level) => {
    await this.commentsRepository.createComment(postId, userId, comment, level);
    return;
  };

  updateComment = async (userId, comment, commentId) => {
    await this.commentsRepository.updateComment(userId, comment, commentId);
    return;
  };

  deleteComment = async () => {
    await this.commentsRepository.deleteMember();
    return;
  };
}

module.exports = CommentsService;

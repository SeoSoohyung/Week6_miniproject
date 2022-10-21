const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, commentNum, userId, comment, level) => {
    await this.commentsRepository.createComment(postId, commentNum, userId, comment, level);
    return;
  };

  updateComment = async ( postId, commentNum, userId, comment, level, commentId ) => {
    await this.commentsRepository.updateComment( postId, commentNum, userId, comment, level, commentId );
    return;
  };

  deleteComment = async ( postId, commentId, userId ) => {
    await this.commentsRepository.deleteComment(postId, commentId, userId);
    return;
  };
}

module.exports = CommentsService;

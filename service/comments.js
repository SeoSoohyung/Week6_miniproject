const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, userId, comment) => {
    try {
      await this.commentsRepository.createComment(postId, userId, comment);
      const findComment = await this.commentsRepository.findComment(postId);
      return findComment;
    } catch (err) {
      throw new Error("댓글 생성 실패 serv");
    }
  };

  updateComment = async (userId, comment, commentId, postId) => {
    try {
      await this.commentsRepository.updateComment(userId, comment, commentId);
      const findComment = await this.commentsRepository.findComment(postId);
      return findComment;
    } catch (err) {
      throw new Error("댓글 수정 실패");
    }
  };
  deleteComment = async (commentId, userId, postId) => {
    try {
      await this.commentsRepository.deleteComment(commentId, userId);
      const findComment = await this.commentsRepository.findComment(postId);
      return findComment;
    } catch (err) {
      throw new Error("댓글 삭제 실패");
    }
  };
}

module.exports = CommentsService;

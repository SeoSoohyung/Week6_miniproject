const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, userId, comment) => {
    try {
      const createComment = await this.commentsRepository.createComment(
        postId,
        userId,
        comment
      );
      return createComment;
    } catch (err) {
      throw new Error("댓글 생성 실패 serv");
    }
  };

  updateComment = async (userId, comment, commentId) => {
    try {
      const updateComment = await this.commentsRepository.updateComment(
        userId,
        comment,
        commentId
      );
      return updateComment;
    } catch (err) {
      throw new Error("댓글 수정 실패");
    }
  };

  deleteComment = async (commentId, userId) => {
    try {
      const deleteComment = await this.commentsRepository.deleteComment(
        commentId,
        userId
      );
      return deleteComment;
    } catch (err) {
      throw new Error("댓글 삭제 실패");
    }
  };
}

module.exports = CommentsService;

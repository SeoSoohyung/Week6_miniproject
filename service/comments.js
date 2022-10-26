const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, userId, comment) => {
    // try {
    const createComment = await this.commentsRepository.createComment({
      postId,
      userId,
      comment,
    });
    return createComment;
    // } catch (err) {
    throw new Error("service : 게시글 생성에 실패했습니다");
    // }
  };

  updateComment = async (userId, comment, commentId) => {
    try {
      const updateComment = await this.commentsRepository.updateComment({
        userId,
        comment,
        commentId,
      });
      return updateComment;
    } catch (err) {
      throw new Error("service : 게시글 생성에 실패했습니다");
    }
  };

  deleteComment = async (commentId, userId) => {
    try {
      const deleteComment = await this.commentsRepository.deleteComment({
        commentId,
        userId,
      });
      return deleteComment;
    } catch (err) {
      throw new Error("service : 게시글 생성에 실패했습니다");
    }
  };
}

module.exports = CommentsService;

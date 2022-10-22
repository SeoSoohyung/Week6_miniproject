const CommentsRepository = require("../repository/comments");

class CommentsService {
  commentsRepository = new CommentsRepository();
  createComment = async (postId, commentNum, userId, comment, level) => {
  try {
    await this.commentsRepository.createComment(
      postId,
      commentNum,
      userId,
      comment,
      level
    );
    return;
  } catch (err) {
    throw new Error("service : 게시글 생성에 실패했습니다");
  }
    
  };

  updateComment = async (userId, comment, commentId) => {
  try {
    await this.commentsRepository.updateComment(userId, comment, commentId);
    return;
  } catch (err) {
    throw new Error("service : 게시글 생성에 실패했습니다");
  }
    
  };

  deleteComment = async (commentId, userId) => {
  try {
    await this.commentsRepository.deleteComment(commentId, userId);
    return;
  } catch (err) {
    throw new Error("service : 게시글 생성에 실패했습니다");
  }
    
  };
}

module.exports = CommentsService;
